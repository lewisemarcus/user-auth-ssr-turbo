// Full Documentation - https://docs.turbo360.co
const express = require("express")
const router = express.Router()

const React = require("react")
const ReactDOMServer = require("react-dom/server")

//import our own React components
const pkg_json = require("../package.json")
const serverIndex = require("../public/dist/es5/server-index")
const containers = require("../public/dist/es5/components/containers")
const store = require("../public/dist/es5/stores")
const turbo = require("turbo360")({ site_id: pkg_json.app })
router.get("/", async (req, res) => {
    let initial = {
        user: {
            currentUser: {
                username: "TEST!",
            },
        },
    }

    if (req.vertexSession != null && req.vertexSession.user != null) {
        try {
            const foundUser = await turbo.fetchOne(
                "user",
                req.vertexSession.user.id,
            )
            initial["user"] = { currentUser: foundUser }
            const initialState = store.configure(initial)

            const admin = React.createElement(containers.Admin)
            const entry = React.createElement(serverIndex, {
                component: admin,
                store: initialState,
            })

            const html = ReactDOMServer.renderToString(entry)

            res.render("index", {
                react: html,
                initialState: JSON.stringify(initialState.getState()),
            })
        } catch (err) {
            res.json({
                confirmation: "fail",
                data: err.message,
            })
        }
    }
})
router.get("/auth", async (req, res) => {
    res.render("auth", null)
})

module.exports = router
