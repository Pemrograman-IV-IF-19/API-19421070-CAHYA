const { promise, reject } = require('bcrypt/promises')
const { isValidObjectId } = require('mongoose')
const modelKategori = require('../model/kategoriModel')


exports.inputKategori = (data) =>
new promise(async (resolve, reject) => {
    await modelKategori.create(data)
    .then(() => {
        resolve({
            status: true,
            msg: 'Berhasil membuat kategori'
        })
    }).catch(err => {
        reject({
            status: false,
            msg: 'Terjadi kesalahan pada server'
        })
    })

})

exports.getAllKategori = () =>
    new promise(async (resolve, reject) => {
        modelKategori.find({})
        .then(dataKategori =>{
            if (dataKategori.length > 0) {
                resolve({
                    status: true,
                    msg: 'Berhasil memuat data',
                    data: dataKategori
                })
            } else {
                reject({
                    status: false,
                    msg: 'Tidak ada kategori'
                })
            }
    }).catch(err => {
        reject({
            status: false,
            msg: 'Terjadi kesalahan pada server'
        })
    })
})


exports.updateKategori = (id, data) =>
new promise(async ( resolve, reject) => {
    modelKategori.updateOne({_id: ObjectId(id)}, data)
    .then(() => {
        resolve({
            status: true,
            msg: 'Berhasil merubah data'
        })
    }).catch(err => {
        reject({
            status: false,
            msg: 'Terjadi kesalahan pada server'
        })
    })
})