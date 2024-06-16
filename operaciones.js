const { Console } = require('console');
const fs = require('fs');

const leer = ()=>{
    try {
        const data = fs.readFileSync('citas.json' , 'utf-8')
        console.log(data.toString())
    } catch (error) {
        console.log('No se puede leer el archivo')
    }
}