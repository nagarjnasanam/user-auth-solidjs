import express from 'express'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();
const router = express.Router();
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
// mongodb

var UserSchema = new mongoose.Schema({
    password: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },

}, {timestamps: true});

const DB =
  "mongodb+srv://nagarjuna:nagarjuna123@cluster0.oynhj.mongodb.net/SolidJS?retryWrites=true&w=majority";

  mongoose.connect(DB,{useNewUrlParser: true, useUnifiedTopology: true}).then(() => console.log("connection started")).catch((error) => console.log(error.message) );
const users = new mongoose.model("users",UserSchema);


/// create user
router.post("/register", async (req, res) => {
      console.log(req.body);
    const { password, email,  } = req.body;
    if (!password || !email ) {
      res.status(422).json("please fill the data");
    }
    try {
        const searchUser = await users.findOne({email:email});
        console.log("searchUser",searchUser);
        if(searchUser){
            console.log(searchUser)
            res.status(422).json("user is already registered ");
        }else{
            const addUser = new users({
                password,
              email,
            });
  
            await addUser.save();
            res.status(201).json(addUser);
            console.log(addUser);
        }
  
  
    } catch(error) {
        res.status(422).json(error);
     
    }
  });

router.get('/',(req,res)=>{
    console.log('hi')
    res.send('HIII')
})

router.post('/signin',async (req,res)=>{
    console.log(req.body)
     const {  email,  } = req.body;
    if ( !email ) {
      res.status(422).json("please fill the data");
    }
    try {
        const searchUser = await users.findOne({email:email});
        console.log(searchUser);
        if(searchUser){
            res.status(200).json("Sign in successfully ");
        }
        else{
           
            res.status(201).json("can not find with username");
  
        }
  
  
    } catch(error) {
        res.status(422).json(error);
     
    }

})

// get users data
router.get("/getUsers",async(req,res) => {
    try{

        const usersData = await users.find();
        res.status(200).json(usersData);
        console.log(usersData);

    }
    catch(error){
        res.status(404).json(error);

    }
})



const port = 8003;
app.use(router)

app.listen(port,() =>{
    console.log(`server is started at ${port}` );
  });