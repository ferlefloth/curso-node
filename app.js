const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs');



crearArchivo( argv.b , argv.l, argv.h) 
    .then( nombreArchivo => console.log(nombreArchivo,'creado'))
    .catch(error => console.log(error))
