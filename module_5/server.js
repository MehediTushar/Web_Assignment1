var http=require('http');
var url=require('url');
var fs=require('fs');

http.createServer(function(req,res){
    if(req.url=="/")
    {
        res.writeHead(200,{'content-Type':'text/html'}); 
        res.write("This Is Home Page");
        res.end(); 
    }
    else if(req.url=="/about")
    {
        res.writeHead(200,{'content-Type':'text/html'}); 
        res.write("This Is About Page");
        res.end(); 
    }
    else if(req.url=="/contact")
    {
        res.writeHead(200,{'content-Type':'text/html'}); 
        res.write("This Is Contact Page");
        res.end(); 
    }
    else if(req.url=="/file-write")
    {
        res.writeHead(200,{'content-Type':'text/html'}); 
        fs.writeFile("demo.txt", 'Hello World', (err)=>{
            if (err)
            {
                console.log(err);
                res.write("Error writing to file.");
            }
            else
            {
               // console.log("File written successfully.");
                res.write("File written successfully.");
            }
            res.end(); 
            
        });
        return;
    }
    
    res.end();
}).listen(3000);
console.log("Server Run Sucess");