let estudiantes = [
  { nombre: "John", promedio: 8.5, aprobado: true },
  { nombre: "Jane", promedio: 7, aprobado: true },
  { nombre: "June", promedio: 3, aprobado: false },
];

let aprobados = estudiantes.filter((valor) => {
  return valor.aprobado === true;
});
let desaprobados = estudiantes.filter((valor) => {
  return valor.aprobado === false;
});
console.log(aprobados);
console.log(desaprobados);
