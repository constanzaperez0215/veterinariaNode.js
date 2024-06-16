const fs = require('fs');

const leer = ()=>{
    try {
        const data = fs.readFileSync('citas.json' , 'utf-8')
        return data.toString()
        // retorna los datos en un formato string
    } catch (error) {
        console.log('No se puede leer el archivo')
    }
}

const registrar= (nombre, edad, tipo, color, enfermedad)=>{
    try {
        const data = leer()
        const citas =JSON.parse(data)
        // la const citas recibe los datos de data y los parsea par convertirlos en json
        citas.push({nombre, edad, tipo, color, enfermedad})
        fs.writeFileSync('citas.json', JSON.stringify(citas))
        // JSON.stringify vuelve a convertir el json en un string
        return 'Paciente guardado con éxito'
    } catch (error) {
        console.log('No se pudo registrar el nuevo paciente')
    }
}

module.exports={leer, registrar}