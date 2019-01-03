const People = require('../models/peopleModel')

module.exports = {
    addPeople : (req,res)=> {
        People.create({
            name : req.body.name,
            age: req.body.age,
            longitude: req.body.longitude,
            latitude: req.body.latitude,
            monthlyIncome : req.body.monthlyIncome,
            score: req.body.score,
            accid: req.query.accid
        },(err,data)=> {
            if(err){
                res.status(500).json({
                    message: `add people error : ${err}`
                })
            }else{
                res.status(200).json({
                    message: 'add people success',
                    data: data
                })
            }
        })
    },
    readByAccId:(req,res)=> {
        let query = []
        let option = {}
        for(let item in req.query){
            if(item != 'accid'){
                query.push({[item] :req.query[item]})
            }else if (item == 'age' || item == 'monthlyIncome' || item == 'score'){
                query.push({[item] :Number(req.query[item])})
            }
        }
        
        if(query.length) option['$or'] = query 
        
        People.find(option)
        .sort({score:-1})
        .limit(10)
        .exec()
        .then(dataPeople =>{
            let result = dataPeople.filter(people => people.accid == req.query.accid)
            if(result.length){
                res.status(200).json({
                    message: `find data people success`,
                    peopleLikeYou : result
                })
            }else{
                res.status(202).json({
                    message: 'No Data found !',
                    peopleLikeYou: []
                })
            }
        })
        .catch(err=> {
            res.status(202).json({
                message: `No Data Found ! ${err}`,
                peopleLikeYou : []
            })
        })
    },
    update:async (req,res)=> {
        try{
            let oldData = await People.findById(req.params.id)
            People.findByIdAndUpdate(req.params.id,{
                name : req.body.name || oldData.name,
                age: req.body.age || oldData.age,
                longitude: req.body.longitude || oldData.longitude,
                latitude: req.body.latitude || oldData.latitude,
                monthlyIncome : req.body.monthlyIncome || oldData.monthlyIncome,
                score: req.body.score || oldData.score,
                accid: oldData.accid,
            },{new:true}, (err, updatedData)=> {
                if(err){
                    res.status(500).json({
                        message: `failed updated data people ${err}`,
                        data: {}
                    })
                }else{
                    res.status(200).json({
                        message: `updated data people success`,
                        data: updatedData
                    })
                }
            })
        }catch(err){
            res.status(500).json({
                message: `something error when update data people ${err}`,
                data: {}
            })
        }
    },
    delete:(req,res)=> {
        People.findByIdAndDelete(req.params.id,(err,deletePeople)=>{
            if(err){
                res.status(500).json({
                    message: `failed to delete data people ${err}`,
                    data: {}
                })
            }else{
                res.status(200).json({
                    message:'Delete data people success',
                    data: deletePeople
                })
            }
        })
    }
}