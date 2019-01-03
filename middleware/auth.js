const jwt = require('jsonwebtoken')

module.exports = {
    check: (req,res,next)=>{
        let providedToken = req.header.providedToken
        if(providedToken){
            try{
                let checkToken = jwt.verify(providedToken, process.env.SECRET)
                next()
            }catch(err){
                res.status(500).json({
                    message: `wrong Token: ${err} `
                })
            }
        }else{
            res.status(500).json({
                message: `you have no privilege here !`
            })
        }
    }
}