const fs = require('fs');

// Asynchronous reading method          
// fs.readFile('input.text',function(err,data){
//     if(err){
//         console.log('Reading error find out');
//         return err;
//     }
//     console.log('data: ', data.toString());
//     return data
// })
// console.log('read end');

// var asynchronousRead = fs.readFileSync('input.text')
// console.log(asynchronousRead.toString());

// fs.writeFile('input.text','Hello I am mukesh', function(err){
//     if(err){
//         console.log('write error');
//         return err;
//     }
// })

// fs.appendFile('input.text',' chalo chale','utf8',function(err){
//     if(err){
//         console.log('append error');
//         return err;
//     }
// })

fs.unlink('input.text',function(err){
    if(err){
        console.log('error delete');
    }else{
        console.log('successfully delete');
    }
})