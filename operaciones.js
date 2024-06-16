const fs = require('fs');

const leer = ()=>{
    try {
        const data = fs.readFileSync('citas.json' , 'utf-8')
        return data.toString()
    } catch (error) {
        console.log('No se puede leer el archivo')
    }
}

const registrar= (nombre, edad, tipo, color, enfermedad)=>{
    try {
        const data = leer()
        const citas =JSON.parse(data)
        citas.push({nombre, edad, tipo, color, enfermedad})
        fs.writeFileSync('citas.json', JSON.stringify(citas))
        return 'Paciente guardado con éxito'
    } catch (error) {
        console.log('No se pudo registrar el nuevo paciente')
    }
}

module.exports={leer, registrar}