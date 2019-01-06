const jwt = require('jsonwebtoken')

module.exports = {
    check: (req,res,next)=>{
        let providedToken = req.headers.token
        if(providedToken){
            try{
                let checkToken = jwt.verify(providedToken, process.env.SECRET)
                if(checkToken.accid == req.headers.accid){
                    next()
                }else{
                    res.status(500).json({
                        message: 'not authorize'
                    })
                }
            }catch(err){
                res.status(500).json({
                    message: `not authorize: ${err} `
                })
            }
        }else{
            res.status(500).json({
                message: `need token , login first !`
            })
        }
    }
}