// Full Documentation - https://docs.turbo360.co
const pkg_json = require("../package.json")
const express = require("express")
const { data } = require("uikit")
const turbo = require("turbo360")({ site_id: pkg_json.app })
const router = express.Router()

router.post("/register", async (req, res) => {
    try {
        const newUser = await turbo.createUser(req.body)

        res.json({
            confirmation: "success",
            data: newUser,
        })
    } catch (err) {
        res.json({
            confirmation: "fail",
            message: err.message,
        })
    }
})
router.post("/login", async (req, res) => {
    try {
        const User = await turbo.login(req.body)
        req.vertexSession.user = { id: User.id }
        res.json({
            confirmation: "success",
            data: User,
        })
    } catch (err) {
        res.json({
            confirmation: "fail",
            message: err.message,
        })
    }
})

router.get("/currentuser", async (req, res) => {
    try {
        if (req.vertexSession == null) {
            res.json({
                confirmation: "fail",
                message: "User is not logged in",
            })
            return
        }
        if (req.vertexSession.user == null) {
            res.json({
                confirmation: "fail",
                message: "User is not logged in",
            })
            return
        }

        const foundUser = await turbo.fetchOne(
            "user",
            req.vertexSession.user.id,
        )

        res.json({
            confirmation: "success",
            data: foundUser,
        })
    } catch (err) {
        res.json({
            confirmation: "fail",
            message: err.message,
        })
    }
})

module.exports = router
