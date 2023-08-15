const { Router } = require("express")
const router = Router()

const fetch = require("node-fetch")

router.get("/", (req, res) => {
    fetch("https://jsonplaceholder.typicode.com/users")
  res.send("user")
})

module.exports = router






