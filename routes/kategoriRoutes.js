const controllerKategori = require('../controller/kategoriController')
const router = require('express').Router()


router.post('/input', ( req, res) => {
    controllerKategori.inputKategori(req.body)
    .then(( result) => {
        res.json(result)
    }).catch(err => {
        res.json(err)
    })
})

router.get('/get-data', ( req, res) => {
    controllerKategori.getAllKategori()
    .then(( result) => {
        res.json(result)
    }).catch(err => {
        res.json(err)
    })
})

router.get('/get-data/:namaKategori', (req, res) => {
    controllerKategori.getKategoriByName(req.params.namaKategori)
    .then((result) => {
        res.json(result)
    }).catch(err => {
        res.json(err)
    })
})

module.exports = router