const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/library',{useNewUrlParser:true,useUnifiedTopology:true});
const Schema=mongoose.Schema;

const AuthorSchema=new Schema({
    author:String,
    country:String,
    category:String,
    image:String
});

var AuthorData=mongoose.model('authordata',AuthorSchema);

module.exports=AuthorData;