const http = require('http');
const PORT = 8000;
const fs = require('fs'); //module to interact with the file system

function requestHandler(req, res){
    res.writeHead(200, {'content-type': 'text/html'}); //headers are important to render html

    let filePath;

    switch(req.url){
        case '/':
            filePath = "./index.html";
            break;
        case '/profile':
            filePath = "./profile.html";
            break;
        default:
            filePath = "./404.html";
            break;
    }

    fs.readFile(filePath, function(err, data){ //asynchronous file reading
        if(err){
            console.log(err);
            return res.end("Error!");
        }
        
        return res.end(data);
    });
}

const server = http.createServer(requestHandler);

server.listen(PORT, function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("Server started on port ", PORT);
});