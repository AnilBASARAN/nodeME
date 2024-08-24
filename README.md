const http = require('http')
const server = http.createServer( (req,res)=>{
    if((req.method === "GET") && (req.url === "/") ){
        res.statusCode(200)
        
        res.closed()
    }

    server.listen(3001,()=>{
        console.log("server is listening 3001 port")
    })


})
