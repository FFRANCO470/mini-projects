// //ejemplo simple
// const frutas = ['platano', 'manzana','platano','pera' ];
// frutas.forEach(item => {
//     console.log(item)
// })

// //exportar
// const frutero = require('./frutas.js')
// frutero.forEach(item => {
//     console.log(item)
// })

// //exportar doble
// const {frutas, dinero} = require('./frutas.js')
// frutas.forEach(item => {
//     console.log(item)
// })
// console.log(dinero)

// //ejemplo
// const cowsay = require("cowsay");
// console.log(cowsay.say({
//     text: 'hole',
//     e : "o0",
//     T : "U "
// }));

const http = require('http');
const server = http.createServer((req, res)=>{
    res.end('estoy respondiendo a solicitud')
})
const puerto = 3000;
server.listen(puerto, ()=>{
    console.log('escuchando solicitud')
})