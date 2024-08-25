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

in the .env file there is a url called external database URL , if you are using your localdatabase it will contain the name,database password and 2-3 variables all added together with colons.
