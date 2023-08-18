const { Router, json } = require("express")
const router = Router()
const movis = require("./semple.json")

const _ = require("underscore")

router.get("/", (req, res) => {
  res.json(movis)
})

router.post("/", (req, res) => {
  const { title, director, year, rankinga } = req.body
  if (title && director && year && rankinga) {
    const id = movis.length + 1
    const newMovis = { ...req.body, id }
    movis.push(newMovis)
    res.json(movis)
  } else {
    res.status(500).json({ error: "There was an error." })
  }
})

router.patch("/:id", (req, res) => {
  const { id } = req.params
  const { title, director, year, rankinga } = req.body
  if (title && director && year && rankinga) {
    _.each(movis, (movi, i) => {
      if (movi.id == id) {
        movi.title = title
        movi.director = director
        movi.year = year
        movi.rankinga = rankinga
      }
    })
    res.json(movis)
  }else{
    res.status(500).json({ error: "There was an error." })
  }
})

router.delete("/:id", (req, res) => {
  const { id } = req.params
  _.each(movis, (movi, i) => {
    if (movi.id == id) {
      movis.splice(i, 1)
    }
  })
  res.send(movis)
})

module.exports = router
