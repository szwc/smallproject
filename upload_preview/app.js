var express = require('express');
var fs = require("fs");

var app = express();


app.post('/fileup',function (req,res) {
	var data ='';

	var form = new formidable.IncomingForm();
	// form.uploadDir = path.join(__dirname,'tmp');
	// form.maxFieldsSize = 1*1024*1024;
	// form.keepExtensions = true;


	var chunks = [];
	var size = 0;

	req.on('data',function (chunk) {
		data +=chunk;
		chunks.push(chunk);
		size += chunk.length;
	});
	req.on("end",function () {
 var buffer = Buffer.concat(chunks , size);
    if(!size){
        res.writeHead(404);
        res.end('');
        return;
    }

    var rems = [];

    //根据\r\n分离数据和报头
    for(var i=0;i<buffer.length;i++){
        var v = buffer[i];
        var v2 = buffer[i+1];
        if(v==13 && v2==10){
            rems.push(i);
        }
    }

    //图片信息
    var picmsg_1 = buffer.slice(rems[0]+2,rems[1]).toString();
    var filename = picmsg_1.match(/filename=".*"/g)[0].split('"')[1];

    //图片数据
    var nbuf = buffer.slice(rems[3]+2,rems[rems.length-2]);

    var path = './tmp/'+filename;
    fs.writeFileSync(path , nbuf);
    console.log("保存"+filename+"成功");

    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8'});
    res.end('<div id="path">'+path+'</div>');
	})

	
	// console.log(req.body);
	// console.log(req.files);
	// res.end();
})