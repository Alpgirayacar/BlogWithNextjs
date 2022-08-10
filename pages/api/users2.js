
    const pgp = require('pg-promise')({
        noWarnings: true
    })
    
    const db = pgp(`postgres://postgre:123456@localhost:5432/blog`)
export default async (req, res) => {
 const body=req.body;
     console.log(body)
    try {
    
       

        const product = await db.one('INSERT INTO contact(name, email,ileti) VALUES($1, $2, $3) RETURNING *', [body.first, body.email,body.ileti])

        res.status(200).json(product)

      
    } catch (error) {
        // console.error(error);
        res.status(500).send({message: ["Error creating on the server"], error: error})
    }
}