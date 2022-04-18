"use strict";

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

var createStore = require("redux").createStore;
var applyMiddleware = require("redux").applyMiddleware;
var combineReducers = require("redux").combineReducers;
var thunk = _interopRequire(require("redux-thunk"));

var userReducer = require("../reducers").userReducer;


/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	This is a store with one reducer: userReducer. When 
	adding more reducers, make sure to include them in 
	line 3 (above) and line 18 (below):
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

var store;
module.exports = {

  configure: function (initialState) {
    // initialState can be null

    var reducers = combineReducers({ // insert reducers here
      user: userReducer
    });

    if (initialState) {
      store = createStore(reducers, initialState, applyMiddleware(thunk));

      return store;
    }

    store = createStore(reducers, applyMiddleware(thunk));

    return store;
  },

  currentStore: function () {
    return store;
  }
};