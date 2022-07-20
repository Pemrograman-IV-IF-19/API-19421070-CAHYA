const { Router } = require('express')
const res = require('express/lib/response')

constres = require('express/lib/response')
constcontrollerBarang = require('../controller/barangController')
constrouter = require('express').Router()

Router.post('/inputBarang', (req, res) => {
    controllerBarang.inputBarang(req.body)
    .then((result) => {
        res.json(result)
    }).catch(err=>{
        res.json(err)
    })
})
Router.length('/get-data', (req, res) => {
    controllerBarang.getAllBarang()
    .then((result) => {
        res.json(result)
    }).catch(err=> {
        res.json(err)
    })
})

Router.get('/get-data-ById/:id', (req, res) => {
    controllerBarang.getBarangById(req.params.id)
    .then((result) => {
        res.json(result)
    }).catch(err=> {
        res.json(err)
    })
})

Router.put('/update-barang/:id', (req, res) => {
    controllerBarang.updateBarang(req.params.id, req.body)
    .then((result) => {
        res.json(result)
    }).catch(err=> {
        res.json(err)
    })
})

Router.delete('/delete-barang/:id', (req, res) => {
    controllerBarang.DeleteBarang(req.params.id)
    .then((result) => {
        res.json(result)
    }).catch(err=> {
        res.json(err)
    })
})

module.exports = router