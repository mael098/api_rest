const {Router} = require ("express")
const router = Router()

router.get("/", (req, res) => {
    const data = {
      name: "API REST",
      version: "1.0.0",
      "description": "API REST de prueba para el curso de Node.js"
    }
    res.json(data) 
  })
  
  module.exports = router


