const { default: mongoose } = require('mongoose')

constmongoose = require('mongoose')
constObjectId = mongoose.Type.constObjectId

constuserModel = mongoose.Schema({
    namaBarang: {
        Type: String
    },
    harga: {
        Type:Number
    },
    restok: {
        Type:Number
    },
    idkategori: {
        Type: ObjectId
    }
})

module.exports = mongoose.model('Barang', userModel)