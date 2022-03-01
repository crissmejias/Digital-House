const fs = require("fs");

let archivoTareas = {
  archivo: "tareas.json",

  leerArchivo: function () {
    return JSON.parse(fs.readFileSync(this.archivo, "utf-8"));
  },
  escribirJson: function (tareas) {
    let tareasNuevas = JSON.stringify(tareas);
    fs.writeFileSync(this.archivo, tareasNuevas, "utf-8");
  },
  guardarTarea: function (tarea) {
    let listaDeTareas = this.leerArchivo();
    listaDeTareas.push(tarea);
    this.escribirJson(listaDeTareas);
  },
  leerPorEstado: function (estado) {
    let tareas = this.leerArchivo();
    let tareasFiltradas = tareas.filter((tarea) => {
      return tarea.estado == estado;
    });
    return tareasFiltradas;
  },
  removerTarea: function (titulo) {
    let tareas = this.leerArchivo();
    let nuevasTareas = tareas.filter((tarea) => {
      return tarea.titulo !== titulo;
    });
    return nuevasTareas;
  },
};

module.exports = archivoTareas;
