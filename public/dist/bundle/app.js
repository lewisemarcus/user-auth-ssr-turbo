!function(e){function t(t){for(var n,a,o=t[0],c=t[1],d=t[2],f=0,s=[];f<o.length;f++)a=o[f],Object.prototype.hasOwnProperty.call(u,a)&&u[a]&&s.push(u[a][0]),u[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(i&&i(t);s.length;)s.shift()();return l.push.apply(l,d||[]),r()}function r(){for(var e,t=0;t<l.length;t++){for(var r=l[t],n=!0,o=1;o<r.length;o++){var c=r[o];0!==u[c]&&(n=!1)}n&&(l.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},u={0:0},l=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var o=window.webpackJsonp=window.webpackJsonp||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var i=c;l.push([12,1]),r()}({12:function(e,t,r){"use strict";var n=c(r(0)),u=c(r(3)),l=c(r(9)),a=r(10),o=r(26);function c(e){return e&&e.__esModule?e:{default:e}}var d=window.__INITIAL_STATE__,i=n.default.createElement(a.Provider,{store:l.default.configure(d)},n.default.createElement(o.Admin,null));u.default.hydrate(i,document.getElementById("root"))},20:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.userReducer=void 0;var n,u=r(21),l=(n=u)&&n.__esModule?n:{default:n};t.userReducer=l.default},21:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,u=r(22),l=(n=u)&&n.__esModule?n:{default:n};var a={all:null,currentUser:null};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments[1],r=Object.assign({},e);switch(t.type){case l.default.CURRENT_USER_RECEIVED:return r.currentUser=t.data,r;case l.default.USERS_RECEIVED:return r.all=t.data,r;case l.default.USER_CREATED:var n=r.all?Object.assign([],r.all):[];return n.unshift(t.data),r.all=n,r;default:return e}}},22:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={USERS_RECEIVED:"USERS_RECEIVED",USER_CREATED:"USER_CREATED",USER_LOGGED_IN:"USER_LOGGED_IN",CURRENT_USER_RECEIVED:"CURRENT_USER_RECEIVED"}},26:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Admin=void 0;var n,u=r(27),l=(n=u)&&n.__esModule?n:{default:n};t.Admin=l.default},27:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(r(0)),u=r(10);l(r(3)),l(r(9));function l(e){return e&&e.__esModule?e:{default:e}}t.default=(0,u.connect)(function(e){return{user:e.user}})(function(e){var t=e.user.currentUser;return n.default.createElement("div",{className:"container"},n.default.createElement("h2",null,"This is the Admin component!"),null==t?"No Current User":n.default.createElement("div",null,t.username))})},9:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,u,l=r(4),a=r(19),o=(n=a)&&n.__esModule?n:{default:n},c=r(20);t.default={configure:function(e){var t=(0,l.combineReducers)({user:c.userReducer});return u=e?(0,l.createStore)(t,e,(0,l.applyMiddleware)(o.default)):(0,l.createStore)(t,(0,l.applyMiddleware)(o.default))},currentStore:function(){return u}}}});