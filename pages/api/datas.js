export default function handler(req, res) {
    // Get data submitted in request's body.
    const body = req.body
  
    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log('body: ', body)
  
    
    res.status(200).json({ data: `${body.first} ${body.last} ${body.email} ${body.blog}` })
    let yeni=body.first;
    console.log(body.first);
    console.log(body.last);
    console.log(body.email);
    console.log(body.blog);
    console.log(yeni);
}
