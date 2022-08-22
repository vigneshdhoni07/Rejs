var x=require('fs')
x.readFile('demo.txt','utf8',(e,d)=>
{
    console.log(d);
})

// x.readFile('./demo.txt', 'utf8', (err, data) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log(data)
// })