const fs = require("fs");
const app = () => {
  const readFile = () => {
    let accion = "listar";
    fs.readFile(
      "/Users/cristhianmejias/Desktop/Curso_Digital_House/App-Tareas/tareas.json",
      (error, datos) => {
        if (error) {
          console.log(error);
        } else {
          console.table(JSON.parse(datos));
        }
      }
    );
  };
  switch (accion) {
    case "listar":
      readFile();
      break;
    case "":
      console.log("Atención - Tienes que pasar una acción");
      break;
    default:
      console.log("No entiendo qué quieres hacer");
  }
};

module.exports = app;
