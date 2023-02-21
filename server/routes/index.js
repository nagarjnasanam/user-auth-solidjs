// const express = require("express");
import express from 'express';
const router = express.Router();
// const users = require("../models/user");

// import users from '../models/user';






// //registering user
// router.post("/register", async (req, res) => {
//   //   console.log(req.body);
//   const { name, email,  } = req.body;
//   if (!name || !email ) {
//     res.status(422).json("please fill the data");
//   }
//   try {
//       const searchUser = await users.findOne({email:email});
//       console.log(searchUser);
//       if(searchUser){
//           res.status(422).json("user is already registered ");
//       }else{
//           const addUser = new users({
//             name,
//             email,
//           });

//           await addUser.save();
//           res.status(201).json(addUser);
//           console.log(addUser);
//       }


//   } catch(error) {
//       res.status(422).json(error);
   
//   }
// });


router.get('/',(req,res)=>{
    console.log('hi')
    res.send('Hi')
})





module.exports = router;