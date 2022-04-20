"use strict";

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

var React = _interopRequire(require("react"));

var Component = require("react").Component;
var connect = require("react-redux").connect;
var ReactDOM = _interopRequire(require("react-dom"));

var store = _interopRequire(require("../../stores"));

function Admin(props) {
  var currentUser = props.user.currentUser;
  return React.createElement(
    "div",
    { className: "container" },
    React.createElement(
      "h2",
      null,
      "This is the Admin component!"
    ),
    currentUser == null ? "No Current User" : React.createElement(
      "div",
      null,
      currentUser.username
    )
  );
}

var stateToProps = function (state) {
  return {
    user: state.user };
};

module.exports = connect(stateToProps)(Admin);