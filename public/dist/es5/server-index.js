"use strict";

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

var React = _interopRequire(require("react"));

var Component = require("react").Component;
var ReactDOM = _interopRequire(require("react-dom"));

var store = _interopRequire(require("./stores"));

var Provider = require("react-redux").Provider;
var Admin = require("./components/containers/index").Admin;
module.exports = function (props) {
  return React.createElement(
    Provider,
    { store: props.store },
    props.component
  );
};