const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://admin:mY8PGn3nrPb1PrAX@cluster0.atpquti.mongodb.net/BookManagement?retryWrites=true&w=majority',{
    useNewUrlParser:true
  }).then((conn)=>{
    //console.log(conn);
    console.log('database connection is succesfull');
  }).catch((error)=>{
    console.log(process.env.CONN_STR);
    console.log('some error occured'+ error.meassage);
  });

  const AdminDataSchema = new mongoose.Schema({
    username:{
      type:String,
      required:[true,'this is a required field'],
      unique:true,
      trim:true,
      maxlength:[100,'length cant be more than 100'],
     
    },
    password:{
      type:String,
      trim:true
    }
});

const Admin = mongoose.model('AdminData',AdminDataSchema);


module.exports = Admin;