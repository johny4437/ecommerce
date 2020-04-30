const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

module.exports = (request, response, next)=>{
     const authHeader = request.headers.authorization;

     if(!authHeader){
        return response.status(401).json({error:" Token not provided"})
     }

     const parts = authHeader.split(" ");

     if(!parts.length === 2){
        return response.status(401).json({error: "Token error"});
     }
     const[ bearer, token] = parts;    
     
     if(! /^Bearer$/i.test(bearer)){
      return response.status(401).json({error: "Token is in bad format."})
     }
     
     
     jwt.verify(token, authConfig.secret, (err, decoded)=>{
        if(err) return response.status(401).json({error:"Token Invalid"});

        request.userId = decoded.id;
         return next();
     })
    
   
   
}