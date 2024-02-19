const fs = require('fs')

// New file create 

// fs.appendFile('nodejs_architecture.txt','utf8',function(err){
//     if(err){
//         console.log('file create error');
//     }else{
//         console.log('successfully create file');
//     }
// })

// end

// File Reading program

// fs.readFile('nodejs_architecture.txt',function(err,data){
//     if(err){
//         console.log('Reading error');
//         return err;
//     }else{
//         console.log('Successfully read.');
//     }
//     console.log(data.toString());
//     return data;
// })

//end

//  Write program


// fs.writeFile('nodejs_architecture.txt','it is higily scalable and provides high perfomance. node js is also flexible with multiple frameworks and make the development process easier.Compared to other sever-side language, node js is also flexile.',function(err){
//     if(err){
//         console.log('Write error');
//         return err
//     }else{
//         console.log('successfully write');
//     }
// })
fs.unlink('nodejs_architecture.txt',function(err){
    if(err){
        console.log('delete file error.');
        return err;
    }else{
        console.log('Successfully file delete.');
    }
})