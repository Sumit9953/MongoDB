const mongoose = require('mongoose')
const User = require('./models/user')

const mongoUrl = "mongodb+srv://Useranuj:2011@cluster0.qjoy0ur.mongodb.net/NewDB?retryWrites=true&w=majority"

try {
mongoose.connect(mongoUrl , { useNewUrlParser: true, useUnifiedTopology: true }) 
} catch (e) {
    console.log(e);
}


async function createDatabase(newUser){
    const user = new User(newUser);
    
   const data = await user.save();
   console.log(data);
}

async function findUser(){
    // const users = await User.find();
    // const users = await User.findById('63ff0019fda98e88c94d0e8a')
    // const users = await User.find({email: 'sumit@gmail.com' ,password: 'abc2011'})
    // const users = await User.find({marks: { $lt : 50}})
    const users = await User.find({email: { $regex : "k"}})
    console.log(users);
}

async function updateUser(userById , password){
    const user = await User.findById(userById);
    user.password = password;
    const Updtaeduser = await user.save();
    console.log(Updtaeduser);

}

updateUser('63ff078a40a10f1b0a681398',1234);

// findUser();

// createDatabase({
//     email: "ankit@gmail.com",
//     password: 'abc2011',
//     marks: 90
// })
