export default function isim(req, res) {
const body=req.body;
console.log('body:',body);
res.status(200);// api ile veri çekmek için kilit kod 
console.log(body.first);
console.log(body.last);
console.log(body.email);
console.log(body.blog);

}