let autos = require("./autos");
const concesionaria = {
  autos: autos,
  buscarAuto: function (patente) {
    let autosFiltrados = this.autos.filter((auto) => {
      return auto.patente == patente;
    });
    if (autosFiltrados[0] === undefined) {
      return null;
    }
    return autosFiltrados[0];
  },
  venderAuto: function (patente) {
    let autoVendido = this.buscarAuto(patente);
    autoVendido.vendido = true;
  },
  autosParaLaVenta: function () {
    let autosParaLaVenta = this.autos.filter((auto) => {
      return auto.vendido === false;
    });
    return autosParaLaVenta;
  },
  autosNuevos: function () {
    let autosDisponibles = this.autosParaLaVenta();
    let autosNuevos = autosDisponibles.filter((auto) => {
      return auto.km <= 100;
    });
    return autosNuevos;
  },
  listaDeVentas: function () {
    let autosVendidos = this.autos.filter((valor) => {
      return valor.vendido === true;
    });
    let precioAutos = autosVendidos.map((valor) => {
      return valor.precio;
    });
    return precioAutos;
  },
  totalDeVentas: function () {
    let valores = this.listaDeVentas();
    let valorTotal = valores.reduce((estado, valor) => estado + valor, 0);
    return valorTotal;
  },
  puedeComprar: function (auto, cliente) {
    if (
      cliente.capacidadDePagoEnCuotas * auto.cuotas >= auto.precio &&
      cliente.capacidadDePagoTotal >= auto.precio
    ) {
      return true;
    }
    return false;
  },
  autosQuePuedeComprar: function (cliente) {
    let autosParaLaVenta = this.autosParaLaVenta();
    let autosValidos = autosParaLaVenta.filter((valor) => {
      return this.puedeComprar(valor, cliente) === true;
    });

    return autosValidos;
  },
};
console.log(
  concesionaria.autosQuePuedeComprar({
    nombre: "Juan",
    capacidadDePagoEnCuotas: 2000000,
    capacidadDePagoTotal: 100000,
  })
);
