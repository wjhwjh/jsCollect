/**
 * Created by Administrator on 2017/10/10.
 */
/**
 * Created by Administrator on 2017/10/10.
 */
'use strict'
var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');


var root = path.resolve(process.argv[2]||'.'); //解析当前目录


var server = http.createServer(function (requset, response) {

    var pathname = url.parse(requset.url).pathname; //request请求当前url，pathname
    var filepath = path.join(root, pathname); //把根目录和请求的pathname连接起来

    var default_filepath = path.join(root, '/axios.html'); //如果请求的是目录，则默认显示index.html页面

    fs.stat(filepath,function(err,stats){

        if(err){
            console.log('404'+requset.url);

            response.writeHead(404);
            response.end('404 not found');

        }else if (stats.isFile()){
          /*console.log('200'+requset.url);
            console.log(requset.url);*/

            response.writeHead(200);
            fs.createReadStream(filepath).pipe(response); //fs.createReadStream() 打开一个流

        }else if(stats.isDirectory()){
           console.log('200'+requset.url);
           console.log(requset.url);
            console.log('响应'+response);
            //创建时间
          // console.log('birth time' + stats.birthtime);
            //修改时间
            //console.log('modified time' + stats.mtime);

           response.writeHead(200);
           fs.createReadStream(default_filepath).pipe(response);

       }

    });

});

server.listen(8080);

console.log('server is running at http://127.0.0.1:8080/');
//console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));
