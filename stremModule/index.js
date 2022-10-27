 const fs = require("fs");
 const http = require("http");


 const server = http.createServer();
 server.on("request", (req, res) => {
     const fs = require("fs");

     // Read Data in One GO
     //  fs.readFile("read.txt", (err, data) => {
     //      if (err) {
     //          console.error(err);
     //      }
     //      res.end(data.toString());
     //  })
     //Read Data in CHUNKS
     //  const readStream = fs.createReadStream("read.txt");
     //  readStream.on("data", (chunkData) => {
     //      res.write(chunkData);
     //  })
     //  readStream.on("end", () => {
     //      res.end();
     //  })
     //  readStream.on("error", () => {
     //      res.end("THER IS SOME ISSUE")
     //  })
     //  readStream.on("finish", () => {
     //      res.end("THIS IS ALL ABOUT STREAM")
     //  })

     // Read and write data in real time using PIPE
     const readStream = fs.createReadStream("read.txt");
     readStream.pipe(res)
 })

 server.listen(3000, "127.0.0.1", () => {
     console.log("lostening to port 3000")
 })