//  * Crea una agenda de contactos por terminal.
//  * - Debes implementar funcionalidades de búsqueda, inserción, actualización y eliminación de contactos.
//  * - Cada contacto debe tener un nombre y un número de teléfono.
//  * - El programa solicita en primer lugar cuál es la operación que se quiere realizar, y a continuación
//  *   los datos necesarios para llevarla a cabo.
//  * - El programa no puede dejar introducir números de teléfono no númericos y con más de 11 dígitos.
//  *   (o el número de dígitos que quieras)
//  * - También se debe proponer una operación de finalización del programa.

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const contactos = new Map()

const agregarContacto = ()=>{
    console.log("")
    rl.question("Escriba el nombre: ",(nombre)=>{
        rl.question("Escriba el celular: ", (telefono)=>{
            const telefonoValido = /^\d{10}$/.test(telefono)
            if (telefonoValido) {
                console.log("")
                contactos.set(nombre, telefono)
                console.log("CONTACTO AGREGADO")
                console.log("")
                console.log(`Nombre: ${nombre}`)
                console.log(`Telefono: ${telefono}`)
                console.log("")
                console.log("Volveras al menu principial")
                console.log("")
                agenda()
            }else {
                console.log("El numero de telefono debe tener 10 digitos")
                console.log("")
                agregarContacto()
            }
        })
    })
   
}

const BuscarContacto = ()=>{
    console.log("")
    rl.question("Escribe el nombre del contacto que desdeas buscar: ", (nombre)=>{
        if (contactos.has(nombre)) {
            const telefono = contactos.get(nombre)
            console.log("")
            console.log("CONTACTO EXISTENTE")
            console.log("")
            console.log(`Nombre: ${nombre}`)
            console.log(`Telefono: ${telefono}`)
            console.log("")
            agenda()
        } else{
            console.log(`El contacto ${nombre} no existe`);
            console.log("")
            console.log("Volveras al menu principial")
            console.log("")
            agenda()
        }
    })
}

const actualizarContacto = ()=>{
    console.log("")
    rl.question("Escribe el nombre del contacto que quieres actualizar: ",(nombre)=>{
        if (contactos.has(nombre)) {
            rl.question("Escrible en telefono actulizado: ",(telefono)=>{
                console.log("")
                contactos.set(nombre,telefono)
                console.log("Contacto actualizado exitosamente")
                console.log(`Contacto: ${nombre}`)
                console.log(`Telefono: ${telefono}`)
                console.log("");
                console.log("Volveras al menu principial")
                console.log("")
                agenda()
            })
        }else{
            console.log("El contacto no se puede actualizar por que no existe existe")
            console.log("")
            agenda()
        }
    })
}

const eliminarContacto = ()=>{
    console.log("")
    rl.question("escribe el nombre del contacto que deseas eliminar: ", (nombre)=>{
        if (contactos.has(nombre)) {
            const telefono = contactos.get(nombre)
            console.log(`Nombre: ${nombre} - ${telefono}`)
            contactos.delete(nombre)
            console.log("contacto eliminado");
            console.log("Volveras al menu principial")
            console.log("")
            agenda()
        } else {
            console.log("El contacto no esta en la base de datos");
            console.log("")
        }
    })
}

const mostrarContactos = ()=>{
    console.log("")
    console.table(contactos)
    agenda()
}

const salir = ()=>{
    console.log("")
    console.log("saliste de la aplicacion");
    rl.close()
    process.exit(0)
}


const agenda = ()=>{
    console.log("")
    console.log("/--------AGENDA--------/")
    console.log("")
    console.log("Escribe la opcion que deseas:")
    console.log("1. Agregar contacto")
    console.log("2. Buscar contacto")
    console.log("3. Actualizar contacto")
    console.log("4. Eliminar contacto")
    console.log("5. Mostrar contactos existentes")
    console.log("6. Salir")

    rl.question("que vas a hacer?",(respuesta)=>{
        switch (respuesta) {
            case "1":
                agregarContacto()
                break;
            case "2":
                BuscarContacto()
                break;
            case "3":
                actualizarContacto()
                break;
            case "4":
                eliminarContacto()
                break;
            case "5":
                mostrarContactos()
                break;
            case "6":
                salir()
                break;
            default:
                console.log("No seleccionaste una opcion valida")
                agenda()
                break;
        }
    })

}
agenda()