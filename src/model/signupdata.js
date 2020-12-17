const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/library',{useNewUrlParser:true,useNewUnifiedTopology:true});
const Schema=mongoose.Schema;

const SignUpSchema=new Schema({
    user:String,
    email:String,
    password:String,
    phone:String
});

var signupdata=mongoose.model('userRegistration',SignUpSchema);

module.exports=signupdata;