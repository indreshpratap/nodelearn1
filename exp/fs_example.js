var fs = require("fs");
var path = require("path");

var filepath = path.join(__dirname, "../", "assets", "readme.html");
//console.log(filepath);
// Example of buffer data
/* fs.readFile(filepath, function (err, data) {
    if (err) {
        console.error(err);
    } else {
        console.log(data.toString());
    }
}); */

// reading data in utf 8 format
/* fs.readFile(filepath, {
    encoding: "utf8"
}, function (err, data) {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
});
 */
var newfilepath = path.join(path.dirname(filepath), "written.txt");

/* fs.writeFile(newfilepath, "This is my data need to be written", "utf8", function (err) {
    if (err) {
        console.error("Failed to write");
    } else {
        console.log("File written successfully");
    }
});
 */
let users = [{
        username: "Indresh",
        email: "Indresh@gmail.com"
    },
    {
        username: "Sandeep",
        email: "sandeep@gmail.com"
    }
];

/*
fs.readFile(filepath, {
    encoding: "utf8"
}, function (err, data) {
    if (err) {
        console.error(err);
    } else {
        let template = data;

        for (let user of users) {
            let processedTemplate = template
                .replace("${username}", user.username)
                .replace("${email}", user.email);

            var newfile = path.join(path.dirname(filepath), user.username + "_processed" + ".html");
            fs.writeFile(newfile, processedTemplate, "utf8", function (err) {
                if (err) {
                    console.error(err);
                } else {
                    console.log("File created");
                }
            });
        }
    }
}); 
*/
var dirpath = "/Users/indresh/Desktop/Screenshots";
fs.readdir(dirpath,function(err,files){
    if(err) {
        console.error(err); 
    }else {
       
        for(let file of files){
            fs.stat(path.join(dirpath,file),function(err,stats){
                if(stats.isDirectory()){
                    console.log(file, " is directory");
                }else {
                    console.log(file," Simple file");
                }
            });
        }
    }
});