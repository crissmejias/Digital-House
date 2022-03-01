const { archivo } = require("./funcionesDeTareas");
let archivoTareas = require("./funcionesDeTareas");

//Si desea investigar un poco más sobre este módulo nativo de NodeJs
//https://nodejs-es.github.io/api/process.html#process_es_process

let accion = process.argv[2];

switch (accion) {
  case "listar":
    console.log("Listado de tareas");
    console.log("------------------");

    let tareas = archivoTareas.leerArchivo();
    // Foreach:
    tareas.forEach((tareas, i) => {
      console.log(i + 1 + ". " + tareas.titulo + " - " + tareas.estado);
    });
    //For:
    // for (let i = 0;  i < tareas.length; i++) {
    //     console.log((i + 1) +'. ' + tareas[i].titulo + ' - ' + tareas[i].estado);
    // }

    console.log();

    break;
  case "crear":
    let TituloNuevaTarea = process.argv[3];
    let nuevaTarea = {
      titulo: TituloNuevaTarea,
      estado: "pendiente",
    };
    archivoTareas.guardarTarea(nuevaTarea);
    break;
  case "filtrar":
    let filtroDeEstado = process.argv[3];
    let tareasFiltradas = archivoTareas.leerPorEstado(filtroDeEstado);
    tareasFiltradas.forEach((tarea) => {
      console.log(tarea);
    });
    break;
  case "borrar":
    let tareaRemovida = process.argv[3];

    let TareasNuevas = archivoTareas.removerTarea(tareaRemovida);
    archivoTareas.escribirJson(TareasNuevas);
    console.log("La lista de tareas ha sido actualizada!");
    break;
  case undefined:
    console.log();
    console.log("Atención - Tienes que pasarme una acción");
    console.log("Las acciones disponibles son: listar");
    console.log("----------------------------------------");

    break;

  default:
    console.log("------------------------------------");
    console.log("No entiendo qué quieres hacer");
    console.log("Las acciones disponibles son: listar");
    console.log("------------------------------------");

    break;
}
