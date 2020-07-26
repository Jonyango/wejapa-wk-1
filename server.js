const http = require('http');
const fs = require('fs');
let url = require('url');



const hostName = '127.0.0.1';
const port = 3000;






const server = http.createServer((req, res) => {

    fs.readFile('index.html',(err,html)=>{
        if(err){
            print('An error occured');
            throw err;
        }  
    
    if (req.method === "GET") {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write(html);
        res.end();
      } else if (req.method === "POST") {
        let body = "";
        req.on("data", (chunk) => {
          body += chunk.toString();
        });
        req.on("end", () => { 
          res.end(`Hello, ${body}Welcome to WeJapa Internships.`);
        });
      }
 });

 
    
    
    

  });


server.listen(port, hostName, () => {
console.log(`Server running at http://${hostName}:${port}/`);
});
