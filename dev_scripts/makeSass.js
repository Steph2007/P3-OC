console.clear();
var sass = require('sass');
var fs = require('fs');
 
const src=[
	"accueil",
	"menus",
	"mentions",
	"all",
];

let result = "";
for( let i=0; i<src.length; i++){	
	result += sass.renderSync({file: "./scss/"+src[i]+".scss"}).css;
}
 
fs.writeFile("./css/result.css", result, function(err){
        if(!err){
          console.log("ok")
        }
      });
