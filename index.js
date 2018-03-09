
//https://www.devmedia.com.br/construindo-um-servidor-web-com-node-js/32023 (testei e funcionou) vou colocar o código no GitHub
process.title = "MyWebServer";
var args = process.argv,
	port = args[2] || 7070,
	webServer = require("./server");

webServer.listen(port, function(){
	console.log("Server started at port "+ port);
});