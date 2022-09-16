const argv = require('yargs')
    // .option('b',{
    //     alias: 'base',
    //     type: 'number',
    //     demandOption: true
    // })
    .options({
        'b':{
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base a multiplicar'
        },
        'l':{
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: 'Muestra la lista en consola'
        },
        'h':{
            alias: 'hasta',
            type: 'number',
            demandOption: true,
            describe: 'Cantidad total de números a multiplicar'
        }
    })
    .check( (argv, options)=>{
        if(isNaN(argv.b)){
            throw new Error('la base tiene que ser un número')
        }
        return true
    })
    .argv;

module.exports = argv;