var path = require("path");

var joined = path.join("users", "indresh", "Documents");
console.log(joined);
console.log("Absolute: ", path.isAbsolute("/" + joined));
console.log("Relative: ", path.isAbsolute("../" + joined));
var joined2  = path.join(joined,"../..////","Movies");
console.log(joined2);
var file ="/Users/indresh/Desktop/Screenshots/Screen Shot 2017-12-24 at 6.29.19 AM.png";
console.log("Dir name", path.dirname(file));
console.log("Base name", path.basename(file));
console.log("Extn. name", path.extname(file));

// console.log("Dir name", path.dirname(file));
