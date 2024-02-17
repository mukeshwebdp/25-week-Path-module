
const path = require('path')

// console.log(path.sep);

// console.log(process.env.path);

// console.log(path.delimiter); // ; it is delimiter

const currentFilePath = __filename; // this method used to current file path find out.
// console.log(currentFilePath);

const currentDirctoryPath = __dirname; // this method use to current dirctory path find out.
// console.log(currentDirctoryPath);

const basename = path.basename(currentFilePath) // for ex: path.js
console.log(`basename -> ${basename}`);

const basenameWithoutExe = path.basename(currentFilePath,'.js') // for ex: path
console.log(`basename without exe -> ${basenameWithoutExe}`);

let extansionName = path.extname(currentFilePath)
// find out extansion name;
console.log(`ext : ${extansionName}`);

let pathJoin = path.format({
    dir: '/public/home',
    base: 'index.html'
})
console.log(`pathToFile: ${pathJoin}`);

console.log(`isAbsolute : ${path.isAbsolute(currentFilePath)}`);

console.log(`isAbsolute : ${path.isAbsolute('./index.js')}`);
console.log(`isAbsolute : ${path.isAbsolute('../index.js')}`);

console.log(`path join : ${path.join('/home','js','dir','index.js')}`);
console.log(path.parse(currentFilePath));

