const express = require("express")
const app = express()
const morgan = require("morgan")

// setinga
app.set("port", process.env.PORT || 3000)
app.set("json spaces", 2)

// middleware
app.use(morgan("dev"))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// routes
app.use('/api/index',require('./router/index'))
app.use('/api/movis',require('./router/movis'))

// empesando el servidor
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`)
})

