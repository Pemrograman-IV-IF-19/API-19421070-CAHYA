const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 8080
const DBConfig = require('./config/DbConfig')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.connect(DBConfig.mongoUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log('berhasil terhubung ke database')
}).catch((err) => {
    console.log(err)
})

app.get('/', (req, res) => {
    res.json({
        msg: 'selamat datang di API'
    })
})

app.listen(port, () => {
    console.log('server berjalan di port ' + port)
})