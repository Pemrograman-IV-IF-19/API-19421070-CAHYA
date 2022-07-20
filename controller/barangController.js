const { default: mongoose } = require('mongoose')
constmodelBarang = require('../model/barang')
constmongoose = require('mongoose')
constObjectId = mongoose.Type.ObjectId

exports.inputBarang = (data) =>
newPromise(async (resolve, reject) => {
    awaitmodelBarang.create(data)
    .then(() => {
        resolve({
            status: true,
            msg: 'Berhasil membuat Barang'
        })
    }).catch(err=> {
        reject({
            status: false,
            msg: 'Terjadi kesalahan pada server'
        })
    })
})

exports.getAllBarang = () =>
     newPromise(async (resolve, reject) => {
        modelBarang.find({})
        .then(dataBarang=> {
            if (dataBarang.length>0) {
                resolve({
                    status: true,
                    msg: 'Berhasil membuat data',
                    data:dataBarang
                })
            }else {
                reject({
                    status: false,
                    msg: 'Tidak ada data kategori'
                })
            }
        }).catch(err=> {
            reject({
                status: false,
                msg: ' Terjadi kesalahan pada server'
            })
        })
})
  exports.getBarangById = (id) =>
  newPromise(async (resolve, reject) => {
      modelBarang.findOne({ _id:ObjectId(id) })
      .then(dataBarang=> {
          if (dataBarang) {
              resolve({
                  status: true,
                  msg: 'Berhasil memuat data',
                  data: dataBarang
              })
          }else {
             reject({
                 status: false,
                 msg: 'Tidak ada data kategori' + name
             })  
          }
      }).catch(err=> {
          reject({
              status:false,
              msg: 'Terjadi kesalahan pada server'
          })
      })
  })

  exports.updateBarang = (id, data) =>
  newPromise(async (resolve, reject) => {
      modelBarang.updateOne({_id:ObjectId(id) }, data)
      .then(() => {
          resolve({
              status:true,
              msg:'Berhasil merubah data'
          })
      }).catch(err=> {
          reject({
              status: false,
              msg:'Terjadi kesalahan pada server'
          })
      })
    })
    exports.DeleteBarang = (id) =>
    newPromise(async (resolve, reject) => {
        modelBarang.deleteOne({ _id:ObjectId(id) })
        .then(() => {
            resolve({
                status:true,
                msg:'Berhasil menghapus data'
            })
        }).catch(err=> {
            reject({
                status: false,
                msg:'Server Tidak Meresponse'
            })
        })
    })