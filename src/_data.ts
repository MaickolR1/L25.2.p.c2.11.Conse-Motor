interface mMoto {
  placa: string;
  color: string;
  modelo: string;
}
interface mAuto {
  placa: string;
  color: string;
  precioBase: number;
}
let vehiculoMoto: mMoto[], vehiculoAuto: mAuto[];
vehiculoMoto = [
  { placa: "44", color: "Rojo", modelo: "T" },
  { placa: "33", color: "Blanco", modelo: "P" },
  { placa: "77", color: "Azul", modelo: "P" },
  { placa: "66", color: "Rojo", modelo: "D" },
];
vehiculoAuto = [
  { placa: "22", color: "Rojo", precioBase: 1000.00 },
  { placa: "11", color: "Blanco", precioBase: 500.00 },
  { placa: "55", color: "Rojo", precioBase: 2000.00 },
  { placa: "88", color: "Azul", precioBase: 3000.00 },
];
export { vehiculoMoto, vehiculoAuto };
