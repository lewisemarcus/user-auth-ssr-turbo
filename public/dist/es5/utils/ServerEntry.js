"use strict";

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

var React = _interopRequire(require("react"));

var Component = require("react").Component;
var Provider = require("react-redux").Provider;
module.exports = function (props) {
  return React.createElement(
    Provider,
    { store: props.store },
    props.component
  );
};