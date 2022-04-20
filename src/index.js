import React, { Component } from "react"
import ReactDOM from "react-dom"
import store from "./stores"
import { Provider } from "react-redux"
import { Admin } from "./components/containers/index"

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	This is the entry point of the React app with Redux
	already implemented. The Intro component is the
	visual content and most likely, you will want
	to remove it and replace with your own visual content.
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/
const initialState = window.__INITIAL_STATE__
const app = (
    <Provider store={store.configure(initialState)}>
        <Admin />
    </Provider>
)

ReactDOM.hydrate(app, document.getElementById("root"))
