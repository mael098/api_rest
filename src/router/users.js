const { Router } = require("express")
const router = Router()
const users = require("./user.json")

// const fetch = ('node-fetch')
// router.get('/', async (req, res) => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     const users = await response.json()
//     console.log(users);
//     res.json(users)
// })

router.get("/", (req, res) => {
  res.json(users)
})

router.get("/", (req, res) => {
  const { user, pass } = req.body
  if (user && pass) {
    const id = (users.length = 1)
    const newUsers = { ...req.body, id }
    users.push(newUsers)
    res.json(users)
  }
})



module.exports = router
