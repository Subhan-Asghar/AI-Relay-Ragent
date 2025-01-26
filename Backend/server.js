const express = require('express')
const app = express()
const port = 3000

app.post('/api/agent', (req, res) => {
    try{
        ChatHistory=req.body;

    }
    catch(err){
        res.send.json({
            message:"Some kind of Error"
        })
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})