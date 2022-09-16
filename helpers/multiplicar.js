const fs = require('fs')
var colors = require('colors');

const crearArchivo = async (base = 5, listar,nroTotalAMultiplicar = 2)=>{ //when define a parameter with a value, it is for default
    
    try{
        console.log('===========')
        console.log(`Tabla del: ${base}`.inverse)
        console.log('===========')
        
        let salida = '';
        for (let i = 0; i <= nroTotalAMultiplicar; i++){
            salida += `${base} x ${i} = ${base * i}\n`       
        }
        if(listar===true){
           console.log(salida .rainbow);
        }
        fs.writeFileSync(`tabla-${ base }.txt`, salida)

        return console.log(`tabla-${base}.txt creado` .green)
    }catch(error){
        throw(Error);
    }
}

module.exports = {
    crearArchivo
}