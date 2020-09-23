var router = require('express').Router()
var fire = require('./fire')
var bodyParser = require('body-parser')
var db = fire.firestore()
router.use(bodyParser.json())

router.get('/data2', (req, res)=>{
  
    var allData = []
    db.collection('students')
    .get()
    .then(snapshot => {
        snapshot.forEach((hasil)=>{
            allData.push(hasil.data())
        })
        console.log(allData)
        res.send(allData)
    }).catch((error)=>{
        console.log(error)
    })
})

router.get('/student', (req, res)=>{
   
    db.collection('students').add({
        id: req.query.id,
        name: req.query.name
    })
    res.send({
        id: req.query.id,
        name: req.query.name
    })
})



module.exports = router
