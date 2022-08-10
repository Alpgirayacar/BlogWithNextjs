
 const fs = require('fs');
 var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/staj');
var Schema=mongoose.Schema;
var userSchema=new Schema({
  firstname:String,
  email:String,
enteredMessage:String
});
var User=mongoose.model('User',userSchema);


export default async function handler(req, res) {
  // Get data submitted in request's body.
  const body = req.body

  // Optional logging to see the responses
  // in the command line where next.js app is running.
 // console.log('body: ', body)

  if (!body.first || !body.last ) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: 'First or last name not found' })
  }


  // Found the name.
  // Sends a HTTP success code
  if (req.method === 'POST'){
    fs.writeFileSync('./example.json', JSON.stringify(req.body))
    var db=mongoose.connection;
    db.once('open',function(){
      var user1=new User({
        firstname:body.first,
        email:body.email,
        enteredMessage:body.blog
      });
      user1.save(function(error){
        if(error) throw error;
        console.log('kaydedildi');
      });
    });
    return res.status(200).json({});
  }


  res.status(200).json({ data: `${body.first} ${body.last} ${body.email} ${body.blog}` })
  
  console.log(body.first);
  console.log(body.last);
  console.log(body.email);
  console.log(body.blog);
  
}