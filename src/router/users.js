const Router = require("express")
const users = require("./user.json")
const _ = require("underscore")

const router = Router()

router.get("/", (req, res) => {
  res.json(users)
})

router.post("/", (req, res) => {
  const { nombre, email, password } = req.body
  if (nombre && email && password) {
    const id = users.length + 1
    const newUser = { ...req.body, id }
    users.push(newUser)
    res.json(users)
  } else {
    res.status(500).json({ error: "There was an error." })
  }
})



module.exports = router

