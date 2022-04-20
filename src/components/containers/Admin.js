import React, { Component } from "react"
import { connect } from "react-redux"
import ReactDOM from "react-dom"
import store from "../../stores"

function Admin(props) {
    const currentUser = props.user.currentUser
    return (
        <div className="container">
            <h2>This is the Admin component!</h2>
            {currentUser == null ? (
                "No Current User"
            ) : (
                <div>{currentUser.username}</div>
            )}
        </div>
    )
}

const stateToProps = (state) => {
    return {
        user: state.user,
    }
}

export default connect(stateToProps)(Admin)
