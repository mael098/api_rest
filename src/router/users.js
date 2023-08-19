const { Router } = require("express")
const users = require("./user.json")
const router = Router()

// const fetch = ('node-fetch')
router.get('/', async (req, res) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json()
    console.log(users);
    res.json(users)
})

router.post('/',(req,res) => {
    const {name,username,email} = req.body
    if(name && username && email) {
        const id = users.length + 1
        const newUser = {...req.body, id}
        users.push(newUser)
        res.json(users)
    }else{
        res.status(500).json({error:'There was an error'})
    }
})




module.exports = router
