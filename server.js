const express = require('express')
const cors = require('cors')

const app = express()

var corOptions = {
    origin : 'https://localhost:7071'
}

// middleware

app.use(cors(corOptions))

app.use(express.json())

app.use(express.urlencoded({extended:true}))

// testing api

app.get('/',(req,res) => {
    res.json({message : "hello from api"})
})

// routers

const router = require('./routes/postRouter.js')

app.use('/api/posts', router)

// static Images Folder

app.use('/Images', express.static('./Images'))

// port

const PORT = process.env.PORT || 3000

// server

app.listen(PORT , () => {
    console.log(`server is running at ${PORT} `)
})