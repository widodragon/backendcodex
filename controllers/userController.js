const User = require('./../db/models').User;
const jwt = require('jsonwebtoken');
const passport = require('passport');
require('../config/passport')(passport);

class UserController {
    async index(req, res, next) {
        var token = getToken(req.headers);
        if (token) {
            try{
                const user = await User.findAll()
                res.send(200, user)
                return next()
            }catch(err){
                console.log(err)
            }
        }else{
            res.json({message:"Unauthorized."});
        }
    }

    async create(req, res, next) {
        try{
            const check=await User.findAll({
                where: {
                  username: req.body.username
                }
              });
            if(check.length>0){
                return res.json({message:'please choose another username!'});
            }else{
                const user = await User.create(req.body)
                res.send(200, user)
                return next()
            }
        }catch(err){
            return res.json({message:'please chech your fields!'});
        }
    }

    async signin(req, res, next){
        User.findOne({
            where: {
              username: req.body.username
            }
          })
          .then(user => {
            if (!user) {
              return res.json({message:'Authentication failed. User not found.'});
            }else{
                user.comparePassword(req.body.password, (err, isMatch) => {
                  if(isMatch && !err) {
                    var token = jwt.sign(JSON.parse(JSON.stringify(user)), 'nodeauthsecret', {expiresIn: 86400 * 30});
                    jwt.verify(token, 'nodeauthsecret', function(err, data){
                      console.log(err, data);
                    })
                    if(req.body.username=="admin"){
                        res.json({level: 1, token: 'JWT ' + token});
                    }else{
                        res.json({level: 2, token: 'JWT ' + token});
                    }
                  } else {
                    res.send({success: false, msg: 'Authentication failed. Wrong password.'});
                  }
                })
            }
          }).catch((error) => res.json(error));
    }


    // update(req, res, next) {
    //     res.send(req.method)
    //     return next()
    // }

    // async delete(req, res, next) {
    //     try{
    //         const pelanggan = await Pelanggan.destroy(
    //             {
    //                 where: {id: req.params.id}
    //             }
    //         )
    //         if(!pelanggan){
    //             res.send(500, {message: 'Pelanggan with the given ID was not found.'})
    //         }
    //         res.send(200, {message: 'Pelanggan has been deleted.'})
    //         return next()
    //     }catch(err){
    //         console.log(err)
    //     }
    // }
}
getToken =(headers)=> {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};
module.exports = new UserController()