// Define las interfaces para cada parte del objeto

interface Minerales {
  calcio: number;
  Hierro: number;
  Yodo: number;
  Magnesio: number;
  Zinc: number;
  Sodio: number;
  Potasio: number;
  Fosforo: number;
  Selenio: number;
}

interface Vitaminas {
  Tiamina: number;
  Riboflavina: number;
  Niacina: number;
  B8: number;
  Folatos: number;
  B12: number;
  C: number;
  A: number;
  D: number;
  E: number;
}

interface Glucidos {
  glucosa: string;
  fructosa: string;
}

interface Macros {
  calorias: number;
  proteinas: number;
  grasas: number;
  AGSaturados: number;
  AGMonoInSaturados: number;
  AGPoliinsaturados: number;
  Omega3: number;
  C182Linoleico: number;
  Colesterol: number;
  carbohidratos: number;
  fibra: number;
  agua: number;
  minerales: Minerales;
  vitaminas: Vitaminas;
  glucidos: Glucidos;
}

interface Fruit {
  ES: string;
  EN: string;
  tipo: string;
  macros: Macros;
  imagen: string;
}
