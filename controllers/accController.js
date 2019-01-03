const Account = require('../models/accModel')
const bcrypt = require('bcrypt-nodejs')
const jwt = require('jsonwebtoken')
const salt = bcrypt.genSaltSync(10);

module.exports = {
    signUp: (req,res) => {
        let accPassword = bcrypt.hashSync(req.body.password, salt)
        Account.create({
            username: req.body.username,
            password: accPassword
        },(err, data)=> {
            if(err){
                res.status(500).json({
                    message: `fail to create new accountount ! ${err.message}`,
                    data: {}
                })
            }else{
                let token = jwt.sign({accid:data._id}, process.env.SECRET)
                res.status(200).json({
                    message: "Sign up success!",
                    data:{
                        id: data._id,
                        username:data.username,
                        token:token
                    }
                })
            }
        })
    },
    signIn: (req,res)=> {
        Account.findOne({username: req.body.username})
            .exec()
            .then(accData =>{
                if(accData){
                    let passwordCheck = bcrypt.compareSync(req.body.password,accData.password)
                    if(passwordCheck){
                        let token = jwt.sign({accid:accData._id}, process.env.SECRET)
                        res.status(200).json({
                            message:'Sign in Success',
                            data:{
                                id: accData._id,
                                username: accData.username,
                                token: token
                            }
                        })
                    }else{
                        res.status(202).json({
                            message: 'Sign in failed your password wrong',
                            data: null
                        })
                    }
                }else{
                    res.status(202).json({
                        message: 'Sign in failed Account doesnt exist, please signup first',
                        data:null
                    })
                }
            })
            .catch(err=>{
                res.status(500).json({
                    message:`Error accoured on getting account data ${err}`
                })
            })
    }
}