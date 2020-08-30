var __extends = (this && this.__extends)||(function(){
  var extendStatics=function(d, b){
    extendStatics = Object.setPrototypeOf ||
      ({__proto__: []} instanceof Array && function(d, b){d.__proto__ = b;}) ||
      function(d, b){for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];};
    return extendStatics(d, b);
  };
  return function(d, b){
    extendStatics(d, b);
    function __(){this.constructor = d;}
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
})();
import * as React from 'react';
var DiffField = /** @class */ (function(_super){
  __extends(DiffField, _super);
  function DiffField(){
    return _super !== null && _super.apply(this, arguments)||this;
 }
  DiffField.prototype.render=function(){
    var _a = this.props, origin = _a.origin, value = _a.value, resource = _a.resource, resourceKey = _a.resourceKey, name = _a.name;
    return (React.createElement("p", {"data-field": name},
      React.createElement("label", null, resource[resourceKey]),
      this.formatResult(origin[name]),
      this.formatResult(value[name])));
  };
  DiffField.prototype.formatResult=function(result){
    if (Array.isArray(result)){
      return (React.createElement("ul", null, result.map(function(item, index){return (React.createElement("li", {key: index}, item));})));
    }
    return (React.createElement("span", null,
      " ",
      result,
      " "));
  };
  return DiffField;
}(React.Component));
export {DiffField};
var DiffFields = /** @class */ (function(_super){
  __extends(DiffFields, _super);
  function DiffFields(){
    return _super !== null && _super.apply(this, arguments)||this;
 }
  DiffFields.prototype.render=function(){
    var _a = this.props, origin = _a.origin, value = _a.value, resource = _a.resource, renderFields = _a.renderFields;
    return (renderFields.map(function(field){
      return React.createElement(DiffField, {key: field, origin: origin, value: value, resource: resource, resourceKey: field.resourceKey, name: field.name});
   }));
  };
  return DiffFields;
}(React.Component));
export {DiffFields};
var Diff = /** @class */ (function(_super){
  __extends(Diff, _super);
  function Diff(){
    return _super !== null && _super.apply(this, arguments)||this;
  }
  Diff.prototype.render=function(){
    var _a = this.props, origin = _a.origin, value = _a.value, resource = _a.resource, renderFields = _a.renderFields;
    return (React.createElement("div", {className: 'diff'},
      React.createElement("h4", null,
        React.createElement("span", null, resource.field),
        React.createElement("span", null, resource.old_data_subject),
        React.createElement("span", null, resource.new_data_subject)),
      React.createElement(DiffFields, {origin: origin, value: value, resource: resource, renderFields: renderFields})));
  };
  return Diff;
}(React.Component));
export {Diff};
