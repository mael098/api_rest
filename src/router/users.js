const Router = require("express")
const users = require("./base/user.json")
const _ = require("underscore")
const { use } = require("./movis")
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
router.patch("/:id", (req, res) => {
  const { id } = req.params
  const { nombre, email, password } = req.body
  if (nombre && email && password) {
    _.each(users, (users, i) => {dgjlvasetyijfncureosmco
      users.nombre = nombre
      users.email = email
      users.password = password
    })
  }
  res.json(users)
})


router.delete("/:id", (req, res) => {
  const { id } = req.params
  _.each(users, users.id)
  if (users.id == id) {
    users.splice(i, 1)
  }
  res.json(users)
})



module.exports = router

