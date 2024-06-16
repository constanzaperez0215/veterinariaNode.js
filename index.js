// console.log(process.argv.slice(2))
// argv es el parametro que recive los datos que le pasamos por consola.
// El slice ayuda a que se muestren los datos desde el indice 2

const {leer, registrar} = require('./operaciones')

const [operacion, nombre, edad, tipo, color, enfermedad] = process.argv.slice(2)
console.log(operacion, nombre, edad, tipo, color, enfermedad)

if(operacion.trim().toLowerCase() === "registrar"){
    let resultado = registrar(nombre, edad, tipo, color, enfermedad)
    console.log(resultado, "pasó el registro")
}else if(operacion.trim().toLowerCase() === "leer"){
    let resultado = leer()
    console.log(resultado, "pasó leer")
}else {
    console.log("Ingrese la opción registrar o leer")
}