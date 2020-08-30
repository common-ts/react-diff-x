import * as React from 'react';

interface DiffFieldProps {
  origin: any;
  value: any;
  resource: any;
  resourceKey: string;
  name: string;
}

export class DiffField extends React.Component<DiffFieldProps, any> {
  render() {
    const { origin, value, resource, resourceKey, name } = this.props;
    return (React.createElement("p", {"data-field": name},
      React.createElement("label", null, resource[resourceKey]),
      this.formatResult(origin[name]),
      this.formatResult(value[name])));
    /*
    return (
      <p data-field={name}>
        <label>{resource[resourceKey]}</label>
        {this.formatResult(origin[name])}
        {this.formatResult(value[name])}
      </p>
    );*/
  }

  formatResult(result) {
    if (Array.isArray(result)){
      return (React.createElement("ul", null, result.map(function(item, index){return (React.createElement("li", {key: index}, item));})));
    }
    return (React.createElement("span", null,
      " ",
      result,
      " "));
    /*
    if (Array.isArray(result)) {
      return (
          <ul>
            {
              result.map((item, index) => (
                  <li key={index}>{item}</li>
              ))
            }
          </ul>
      );
    }
    return (
        <span> {result} </span>
    );
    */
  }
}

interface DiffFieldsProps {
  origin: any;
  value: any;
  resource: any;
  renderFields: any;
}

export class DiffFields extends React.Component<DiffFieldsProps, any> {
  render() {
    const {origin, value, resource, renderFields} = this.props;
    return (
      renderFields.map(field => {
        return React.createElement(DiffField, {key: field, origin: origin, value: value, resource: resource, resourceKey: field.resourceKey, name: field.name});
        // return <DiffField key={field} origin= {origin} value= {value} resource={resource} resourceKey={field.resourceKey} name={field.name} />;
      })
    );
  }
}

interface DiffProps {
  origin: any;
  value: any;
  resource: any;
  renderFields: any;
}

export class Diff extends React.Component<DiffProps, any> {
  render() {
    const {origin, value, resource, renderFields} = this.props;
    return (React.createElement("div", {className: 'diff'},
      React.createElement("h4", null,
        React.createElement("span", null, resource.field),
        React.createElement("span", null, resource.old_data_subject),
        React.createElement("span", null, resource.new_data_subject)),
      React.createElement(DiffFields, {origin: origin, value: value, resource: resource, renderFields: renderFields})));
      /*
    return (
      <div className='diff'>
        <h4>
          <span>{resource.field}</span>
          <span>{resource.old_data_subject}</span>
          <span>{resource.new_data_subject}</span>
        </h4>
        <DiffFields origin= {origin} value= {value} resource={resource} renderFields={renderFields}/>
      </div>
    );*/
  }
}
