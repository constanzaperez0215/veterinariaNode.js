console.log(process.argv.slice(2))
// argv es el parametro que recive los datos que le pasamos por consola.
// El slice ayuda a que se muestren los datos desde el indice 2

const [operacion, nombre, edad, tipo, color, enfermedad] = process.argv.slice(2)
console.log(operacion, nombre, edad, tipo, color, enfermedad)

if(operacion.trim().toLowerCase() === "registrar"){
    // registrar(nombre, edad, animal, color, enfermedad)
    console.log("pasó el registro")
    }
else if(operacion.trim().toLowerCase() === "leer"){
    // leer()
    console.log("pasó leer")
    }
else {
    console.log("Ingrese la opción registrar o leer")
}