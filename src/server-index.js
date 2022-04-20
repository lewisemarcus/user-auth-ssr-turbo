import React, { Component } from "react"
import ReactDOM from "react-dom"
import store from "./stores"
import { Provider } from "react-redux"
import { Admin } from "./components/containers/index"

export default (props) => {
    return <Provider store={props.store}>{props.component}</Provider>
}