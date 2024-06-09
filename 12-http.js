const http=require('http');

//const server=http.createServer((req,res)=>{
  // console.log(req)
   //res.write('this is my respond')
   //res.end()
//})

const server=http.createServer((req,res)=>{
    console.log(req)
    if(req.url==='/'){
        res.end('this is home page')
    }
    if(req.url==='/about'){
        res.end('this is our short history')
    }
    res.end(`
    <h1>oops!</h1>
    <p>page not found</p>
    <a href="/">back home</a>
    `)
})
server.listen(3000)