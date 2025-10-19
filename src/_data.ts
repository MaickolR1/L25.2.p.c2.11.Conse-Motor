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
vehiculoAuto = [
  { placa: "22", color: "Rojo", precioBase: 1000 },
  { placa: "11", color: "Blanco", precioBase: 500 },
  { placa: "55", color: "Rojo", precioBase: 2000 },
  { placa: "88", color: "Azul", precioBase: 3000 },
];

vehiculoMoto = [
  { placa: "44", color: "Rojo", modelo: "T" },
  { placa: "33", color: "Blanco", modelo: "P" },
  { placa: "77", color: "Azul", modelo: "P" },
  { placa: "66", color: "Rojo", modelo: "D" },
];
export { vehiculoMoto, vehiculoAuto };
