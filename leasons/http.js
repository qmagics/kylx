const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

// http.get("http://www.baidu.com", (res) => {
//     const rs = fs.createWriteStream("./baidu.html");

//     res.pipe(rs);
// })

const server = http.createServer();

server.on("request", (req, res) => {
    // console.log('client request on');

    // res.setHeader("Content-Type", "text/html");
    // fs.readFile(path.resolve(__dirname, './baidu.html'), 'utf8', (err, data) => {
    //     res.end(data);
    // })

    // 请求行
    // console.log(req.method);
    // console.log(req.url);
    // console.log(url.parse(req.url))

    // 请求头 key一般是大写开头 node已经默认转成小写
    // console.log(req.headers);


    // 请求体
    const chunk = [];
    req.on('data', (data) => {
        chunk.push(data);
        // console.log(111,data);
    })
    req.on("end", () => {
        console.log(Buffer.concat(chunk).toString())
    })

    res.statusCode = 333;
    res.statusMessage = "myeee";
    res.setHeader("hhh", 1)

    res.write("LLL")

    res.end("HELLO")
})

server.listen(3333);