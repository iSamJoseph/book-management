const mongoose = require('mongoose');


const BookDataSchema = new mongoose.Schema({
    title:{
      type:String,
      required:[true,'this is a required field'],
      unique:true,
      trim:true,
      maxlength:[100,'length cant be more than 100']
     
    },
      author:{
        type:String,
        required:[true,'this is a required field'],
       
        trim:true,
        maxlength:[100,'length cant be more than 100']
       
      },
    description:{
      type:String,
      required:[true,'this is a required field'],
     
      trim:true,
      maxlength:[100,'length cant be more than 100']
    },
    publishyear:{
       
            type:Number,
            required:[true,'this is a required field'],
           
            trim:true,
            maxlength:[10,'length cant be more than 10']
         
    }
});

const Book = mongoose.model('BookData',BookDataSchema);


module.exports = Book;