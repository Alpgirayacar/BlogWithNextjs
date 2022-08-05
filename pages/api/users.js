

import { MongoClient } from "mongodb";

export default async function handler(req, res) {
    
  
    // Get data submitted in request's body.
    const body = req.body
  
    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log('body: ', body)
  
    // Guard clause checks for first and last name,
    // and returns early if they are not found
    if (!body.first || !body.email) {
      // Sends a HTTP bad request error code
      return res.status(400).json({ data: 'First or last name not found' })
    }
let client;

try{
  client=await MongoClient.connect('mongodb://localhost:27017/Bproje');
}catch(error){
  res.status(500).json({message : 'bğlanamadı'});
  return;
}
const db=client.db();
try{
  const result=await db.collection('message').insertOne(body);
}catch(error){
  client.close();
  res.status(500).json({message:'storing '});
  return;
}

client.close();
    // Found the name.
    // Sends a HTTP success code
    res.status(200).json({ data: `${body.first} ${body.email} ${body.ileti}` })
    console.log(body.first);
    console.log(body.email);
    console.log(body.ileti);
    
  }
