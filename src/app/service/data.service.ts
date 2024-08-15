import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  fruits = [

    {
      "nombre": "Aguacate",
      "tipo": "Fruta",
      "macros": {
        "calorias": 141.0,
        "proteinas": 1.5,
        "grasas": 12.0,
        "AGSaturados": 1.41,
        "AGMonoInSaturados": 9.01,
        "AGPoliinsaturados": 1.04,
        "Omega3": 0.046,
        "C182Linoleico": 0.986,
        "Colesterol": 0.0,
        "carbohidratos": 5.9,
        "fibra": 1.8,
        "agua": 78.8,
        "minerales": {
          "calcio": 16.0,
          "Hierro": 0.7,
          "Yodo": 2.0,
          "Magnesio": 41.0,
          "Zinc": 0.3,
          "Sodio": 2.0,
          "Potasio": 400.0,
          "Fosforo": 28.0,
          "Selenio": 0.0
        },
        "vitaminas": {
          "Tiamina": 0.09,
          "Riboflavina": 0.12,
          "Niacina": 1.5,
          "B8": 0.42,
          "Folatos": 11.0,
          "B12": 0.0,
          "C": 17.0,
          "A": 25.0,
          "D": 0.0,
          "E": 3.2
        }
      },
      "imagen": "https://exoticfruitbox.com/wp-content/uploads/2015/10/aguacate.jpg"
    },
    {
      "nombre": "Albaricoque",
      "tipo": "Fruta",
      "macros": {
        "calorias": 45.0,
        "proteinas": 0.8,
        "grasas": 0.0,
        "AGSaturados": 0.0,
        "AGMonoInSaturados": 0.0,
        "AGPoliinsaturados": 0.0,
        "Omega3": 0.0,
        "C182Linoleico": 0.0,
        "Colesterol": 0.0,
        "carbohidratos": 9.5,
        "fibra": 2.1,
        "agua": 87.6,
        "minerales": {
          "calcio": 17.0,
          "Hierro": 0.5,
          "Yodo": 0.0,
          "Magnesio": 12.0,
          "Zinc": 0.1,
          "Sodio": 1.0,
          "Potasio": 293.0,
          "Fosforo": 24.0,
          "Selenio": 1.0
        },
        "vitaminas": {
          "Tiamina": 0.05,
          "Riboflavina": 0.07,
          "Niacina": 0.6,
          "B8": 0.07,
          "Folatos": 5.0,
          "B12": 0.0,
          "C": 7.0,
          "A": 27.0,
          "D": 0.0,
          "E": 0.0
        }
      },
      "imagen": "https://imgs.search.brave.com/SYQqtaKGFDAgsB5YTAN9UvgaEzJr_zh6_ygtt1r2pPE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YWxsbmF0dXJhbGJp/bGJhby5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjEvMDYv/NDY3NDRGQkUtQjFD/MS00MjdGLUE0NjIt/QkY5MDI2NkQyQzg3/LmpwZWc"
    },
    {
      "nombre": "Caqui",
      "tipo": "Fruta",
      "macros": {
        "calorias": 73.0,
        "proteinas": 0.7,
        "grasas": 0.3,
        "AGSaturados": 0.0,
        "AGMonoInSaturados": 0.0,
        "AGPoliinsaturados": 0.0,
        "Omega3": 0.0,
        "C182Linoleico": 0.0,
        "Colesterol": 0.0,
        "carbohidratos": 16.0,
        "fibra": 1.6,
        "agua": 81.4,
        "minerales": {
          "calcio": 8.0,
          "Hierro": 0.24,
          "Yodo": 0.0,
          "Magnesio": 9.5,
          "Zinc": 0.1,
          "Sodio": 4.0,
          "Potasio": 190.0,
          "Fosforo": 22.0,
          "Selenio": 0.6
        },
        "vitaminas": {
          "Tiamina": 0.02,
          "Riboflavina": 0.04,
          "Niacina": 0.3,
          "B8": 0.0,
          "Folatos": 7.0,
          "B12": 0.0,
          "C": 16.0,
          "A": 158.0,
          "D": 0.0,
          "E": 0.0
        }
      },
      "imagen": "https://fruittoday.com/wp-content/uploads/2022/09/caqui-engorda.jpg"
    },
    {
      "nombre": "Cereza",
      "tipo": "Fruta",
      "macros": {
        "calorias": 65.0,
        "proteinas": 0.8,
        "grasas": 0.5,
        "AGSaturados": 0.0,
        "AGMonoInSaturados": 0.0,
        "AGPoliinsaturados": 0.0,
        "Omega3": 0.0,
        "C182Linoleico": 0.0,
        "Colesterol": 0.0,
        "carbohidratos": 13.5,
        "fibra": 1.5,
        "agua": 83.7,
        "minerales": {
          "calcio": 16.0,
          "Hierro": 0.4,
          "Yodo": 2.0,
          "Magnesio": 11.0,
          "Zinc": 0.12,
          "Sodio": 2.0,
          "Potasio": 255.0,
          "Fosforo": 21.0,
          "Selenio": 1.2
        },
        "vitaminas": {
          "Tiamina": 0.05,
          "Riboflavina": 0.06,
          "Niacina": 0.4,
          "B8": 0.05,
          "Folatos": 8.0,
          "B12": 0.0,
          "C": 8.0,
          "A": 3.0,
          "D": 0.0,
          "E": 0.1
        }
      },
      "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGw7o1aVv7SjG5aCOs0LDS_kZRtQzO32QQsw&s"
    },
    {
      "nombre": "Chirimoya",
      "tipo": "Fruta",
      "macros": {
        "calorias": 90.0,
        "proteinas": 1.0,
        "grasas": 0.2,
        "AGSaturados": 0.0,
        "AGMonoInSaturados": 0.0,
        "AGPoliinsaturados": 0.0,
        "Omega3": 0.0,
        "C182Linoleico": 0.0,
        "Colesterol": 0.0,
        "carbohidratos": 20.0,
        "fibra": 1.9,
        "agua": 76.9,
        "minerales": {
          "calcio": 30.0,
          "Hierro": 0.6,
          "Yodo": 0.0,
          "Magnesio": 0.0,
          "Zinc": 0.0,
          "Sodio": 4.0,
          "Potasio": 382.0,
          "Fosforo": 21.0,
          "Selenio": 0.0
        },
        "vitaminas": {
          "Tiamina": 0.08,
          "Riboflavina": 0.09,
          "Niacina": 0.9,
          "B8": 0.0,
          "Folatos": 0.0,
          "B12": 0.0,
          "C": 18.0,
          "A": 0.0,
          "D": 0.0,
          "E": 0.0
        }
      },
      "imagen": "https://www.frutiban.com/wp-content/uploads/2017/12/chirimoya.jpg"
    },
    {
      "nombre": "Ciruela",
      "tipo": "Fruta",
      "macros": {
        "calorias": 51.0,
        "proteinas": 0.6,
        "grasas": 0.0,
        "AGSaturados": 0.0,
        "AGMonoInSaturados": 0.0,
        "AGPoliinsaturados": 0.0,
        "Omega3": 0.0,
        "C182Linoleico": 0.0,
        "Colesterol": 0.0,
        "carbohidratos": 11.0,
        "fibra": 2.1,
        "agua": 86.3,
        "minerales": {
          "calcio": 14.0,
          "Hierro": 0.4,
          "Yodo": 2.0,
          "Magnesio": 8.0,
          "Zinc": 0.1,
          "Sodio": 2.0,
          "Potasio": 214.0,
          "Fosforo": 19.0,
          "Selenio": 0.0
        },
        "vitaminas": {
          "Tiamina": 0.07,
          "Riboflavina": 0.05,
          "Niacina": 0.5,
          "B8": 0.05,
          "Folatos": 3.0,
          "B12": 0.0,
          "C": 3.0,
          "A": 49.2,
          "D": 0.0,
          "E": 0.7
        }
      },
      "imagen": "https://www.frutasluzon.com/wp-content/uploads/2018/07/CIRUELA-ROJA-600x399.jpg"
    },
    {
      "nombre": "Coco",
      "tipo": "Fruta",
      "macros": {
        "calorias": 373.0,
        "proteinas": 3.2,
        "grasas": 36.0,
        "AGSaturados": 30.9,
        "AGMonoInSaturados": 2.4,
        "AGPoliinsaturados": 0.61,
        "Omega3": 0.0,
        "C182Linoleico": 0.0,
        "Colesterol": 0.0,
        "carbohidratos": 3.7,
        "fibra": 10.5,
        "agua": 46.6,
        "minerales": {
          "calcio": 13.0,
          "Hierro": 2.1,
          "Yodo": 1.0,
          "Magnesio": 52.0,
          "Zinc": 0.5,
          "Sodio": 17.0,
          "Potasio": 405.0,
          "Fosforo": 94.0,
          "Selenio": 10.1
        },
        "vitaminas": {
          "Tiamina": 0.03,
          "Riboflavina": 0.02,
          "Niacina": 1.1,
          "B8": 0.04,
          "Folatos": 26.0,
          "B12": 0.0,
          "C": 2.0,
          "A": 0.0,
          "D": 0.0,
          "E": 0.73
        }
      },
      "imagen": "https://images.ecestaticos.com/XzFf5fJnhRqdwsyLzg_OYeT3jaY=/0x85:1896x1505/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F03c%2F61a%2Fca3%2F03c61aca3e0d45f3d52402f4ed27ab83.jpg"
    },
    {
      "nombre": "Frambuesa",
      "tipo": "Fruta",
      "macros": {
        "calorias": 40.0,
        "proteinas": 1.4,
        "grasas": 0.3,
        "AGSaturados": 0.1,
        "AGMonoInSaturados": 0.1,
        "AGPoliinsaturados": 0.1,
        "Omega3": 0.0,
        "C182Linoleico": 0.0,
        "Colesterol": 0.0,
        "carbohidratos": 4.6,
        "fibra": 6.7,
        "agua": 87.0,
        "minerales": {
          "calcio": 25.0,
          "Hierro": 0.7,
          "Yodo": 0.0,
          "Magnesio": 19.0,
          "Zinc": 0.3,
          "Sodio": 3.0,
          "Potasio": 170.0,
          "Fosforo": 31.0,
          "Selenio": 1.3
        },
        "vitaminas": {
          "Tiamina": 0.03,
          "Riboflavina": 0.05,
          "Niacina": 0.8,
          "B8": 0.06,
          "Folatos": 33.0,
          "B12": 0.0,
          "C": 32.0,
          "A": 1.0,
          "D": 0.0,
          "E": 0.48
        }
      },
      "imagen": "https://lh6.googleusercontent.com/proxy/uDDyTBcWXilvgYjaecRumLLk4Zx9Ep9nJgVanLY2z1EL88W87ic6qdJX31DpbtTv6EadtDLWIIl2HIpfOUOSEu1XGUrJiHvwkxm9yarV8vyxsWw"
    },
    {
      "nombre": "Fresa",
      "tipo": "Fruta",
      "macros": {
        "calorias": 40.0,
        "proteinas": 0.7,
        "grasas": 0.5,
        "AGSaturados": 0.0,
        "AGMonoInSaturados": 0.0,
        "AGPoliinsaturados": 0.0,
        "Omega3": 0.0,
        "C182Linoleico": 0.0,
        "Colesterol": 0.0,
        "carbohidratos": 7.0,
        "fibra": 2.2,
        "agua": 89.6,
        "minerales": {
          "calcio": 25.0,
          "Hierro": 0.8,
          "Yodo": 8.0,
          "Magnesio": 12.0,
          "Zinc": 0.1,
          "Sodio": 2.0,
          "Potasio": 190.0,
          "Fosforo": 26.0,
          "Selenio": 0.0
        },
        "vitaminas": {
          "Tiamina": 0.02,
          "Riboflavina": 0.04,
          "Niacina": 0.6,
          "B8": 0.06,
          "Folatos": 20.0,
          "B12": 0.0,
          "C": 60.0,
          "A": 1.0,
          "D": 0.0,
          "E": 0.2
        }
      },
      "imagen": "https://static.libertyprim.com/files/familles/fraise-large.jpg?1569271765"
    },
    {
      "nombre": "Granada",
      "tipo": "Fruta",
      "macros": {
        "calorias": 34.0,
        "proteinas": 0.7,
        "grasas": 0.1,
        "AGSaturados": 0.0,
        "AGMonoInSaturados": 0.0,
        "AGPoliinsaturados": 0.0,
        "Omega3": 0.0,
        "C182Linoleico": 0.0,
        "Colesterol": 0.0,
        "carbohidratos": 7.5,
        "fibra": 0.2,
        "agua": 91.5,
        "minerales": {
          "calcio": 8.0,
          "Hierro": 0.6,
          "Yodo": 0.0,
          "Magnesio": 3.0,
          "Zinc": 0.3,
          "Sodio": 5.0,
          "Potasio": 275.0,
          "Fosforo": 15.0,
          "Selenio": 0.6
        },
        "vitaminas": {
          "Tiamina": 0.02,
          "Riboflavina": 0.02,
          "Niacina": 0.3,
          "B8": 0.11,
          "Folatos": 0.0,
          "B12": 0.0,
          "C": 5.7,
          "A": 3.5,
          "D": 0.0,
          "E": 0.0
        }
      },
      "imagen": "https://s1.ppllstatics.com/elcorreo/www/multimedia/202301/23/media/cortadas/despensa26-kUHH-U1903686388111LF-1248x770@El%20Correo.jpg"
    },
    {
      "nombre": "Grosella",
      "tipo": "Fruta",
      "macros": {
        "calorias": 32.0,
        "proteinas": 1.1,
        "grasas": 0.2,
        "AGSaturados": 0.039,
        "AGMonoInSaturados": 0.029,
        "AGPoliinsaturados": 0.073,
        "Omega3": 0.032,
        "C182Linoleico": 0.041,
        "Colesterol": 0.0,
        "carbohidratos": 4.8,
        "fibra": 3.5,
        "agua": 90.4,
        "minerales": {
          "calcio": 29.0,
          "Hierro": 0.9,
          "Yodo": 1.0,
          "Magnesio": 13.0,
          "Zinc": 0.24,
          "Sodio": 1.3,
          "Potasio": 257.0,
          "Fosforo": 27.0,
          "Selenio": 1.3
        },
        "vitaminas": {
          "Tiamina": 0.04,
          "Riboflavina": 0.03,
          "Niacina": 0.3,
          "B8": 0.045,
          "Folatos": 11.0,
          "B12": 0.0,
          "C": 36.0,
          "A": 4.2,
          "D": 0.0,
          "E": 0.72
        }
      },
      "imagen": "https://static.libertyprim.com/files/familles/groseille-large.jpg?1569271784"
    },
    {
      "nombre": "Higo",
      "tipo": "Fruta",
      "macros": {
        "calorias": 85.0,
        "proteinas": 1.2,
        "grasas": 0.0,
        "AGSaturados": 0.0,
        "AGMonoInSaturados": 0.0,
        "AGPoliinsaturados": 0.0,
        "Omega3": 0.0,
        "C182Linoleico": 0.0,
        "Colesterol": 0.0,
        "carbohidratos": 16.0,
        "fibra": 2.5,
        "agua": 80.3,
        "minerales": {
          "calcio": 38.0,
          "Hierro": 0.6,
          "Yodo": 0.0,
          "Magnesio": 20.0,
          "Zinc": 0.3,
          "Sodio": 2.0,
          "Potasio": 270.0,
          "Fosforo": 22.5,
          "Selenio": 0.0
        },
        "vitaminas": {
          "Tiamina": 0.06,
          "Riboflavina": 0.05,
          "Niacina": 0.5,
          "B8": 0.11,
          "Folatos": 0.0,
          "B12": 0.0,
          "C": 2.0,
          "A": 8.0,
          "D": 0.0,
          "E": 0.0
        }
      },
      "imagen": "https://frutasolivar.com/wp-content/uploads/2020/08/higos.jpg.webp"
    },
    {
      "nombre": "Kiwi",
      "tipo": "Fruta",
      "macros": {
        "calorias": 55.0,
        "proteinas": 1.1,
        "grasas": 0.5,
        "AGSaturados": 0.0,
        "AGMonoInSaturados": 0.0,
        "AGPoliinsaturados": 0.0,
        "Omega3": 0.0,
        "C182Linoleico": 0.0,
        "Colesterol": 0.0,
        "carbohidratos": 10.6,
        "fibra": 1.9,
        "agua": 85.9,
        "minerales": {
          "calcio": 25.0,
          "Hierro": 0.4,
          "Yodo": 0.0,
          "Magnesio": 15.0,
          "Zinc": 0.1,
          "Sodio": 4.0,
          "Potasio": 290.0,
          "Fosforo": 35.0,
          "Selenio": 0.6
        },
        "vitaminas": {
          "Tiamina": 0.01,
          "Riboflavina": 0.03,
          "Niacina": 0.6,
          "B8": 0.15,
          "Folatos": 0.0,
          "B12": 0.0,
          "C": 59.0,
          "A": 3.0,
          "D": 0.0,
          "E": 0.0
        }
      },
      "imagen": "https://www.frutas-hortalizas.com/img/fruites_verdures/presentacio/14.jpg"
    },
    {
      "nombre": "Limon",
      "tipo": "Fruta",
      "macros": {
        "calorias": 44.0,
        "proteinas": 0.7,
        "grasas": 0.4,
        "AGSaturados": 0.0,
        "AGMonoInSaturados": 0.0,
        "AGPoliinsaturados": 0.0,
        "Omega3": 0.0,
        "C182Linoleico": 0.0,
        "Colesterol": 0.0,
        "carbohidratos": 9.0,
        "fibra": 1.0,
        "agua": 88.9,
        "minerales": {
          "calcio": 12.0,
          "Hierro": 0.4,
          "Yodo": 3.0,
          "Magnesio": 18.0,
          "Zinc": 0.12,
          "Sodio": 3.0,
          "Potasio": 149.0,
          "Fosforo": 16.0,
          "Selenio": 1.0
        },
        "vitaminas": {
          "Tiamina": 0.05,
          "Riboflavina": 0.03,
          "Niacina": 0.17,
          "B8": 0.11,
          "Folatos": 7.0,
          "B12": 0.0,
          "C": 50.0,
          "A": 2.3,
          "D": 0.0,
          "E": 0.5
        }
      },
      "imagen": "https://www.quironsalud.com/idcsalud-client/cm/images?locale=es_ES&idMmedia=3153140"
    },
    {
      "nombre": "Mandarina",
      "tipo": "Fruta",
      "macros": {
        "calorias": 43.0,
        "proteinas": 0.8,
        "grasas": 0.0,
        "AGSaturados": 0.0,
        "AGMonoInSaturados": 0.0,
        "AGPoliinsaturados": 0.0,
        "Omega3": 0.0,
        "C182Linoleico": 0.0,
        "Colesterol": 0.0,
        "carbohidratos": 9.0,
        "fibra": 1.9,
        "agua": 88.3,
        "minerales": {
          "calcio": 36.0,
          "Hierro": 0.3,
          "Yodo": 0.0,
          "Magnesio": 11.0,
          "Zinc": 0.4,
          "Sodio": 2.0,
          "Potasio": 160.0,
          "Fosforo": 17.2,
          "Selenio": 0.0
        },
        "vitaminas": {
          "Tiamina": 0.07,
          "Riboflavina": 0.02,
          "Niacina": 0.3,
          "B8": 0.07,
          "Folatos": 21.0,
          "B12": 0.0,
          "C": 35.0,
          "A": 56.0,
          "D": 0.0,
          "E": 0.0
        }
      },
      "imagen": "https://elpoderdelconsumidor.org/wp-content/uploads/2016/11/mandarina.jpg"
    },
    {
      "nombre": "Manzana",
      "tipo": "Fruta",
      "macros": {
        "calorias": 53.0,
        "proteinas": 0.3,
        "grasas": 0.0,
        "AGSaturados": 0.0,
        "AGMonoInSaturados": 0.0,
        "AGPoliinsaturados": 0.0,
        "Omega3": 0.0,
        "C182Linoleico": 0.0,
        "Colesterol": 0.0,
        "carbohidratos": 12.0,
        "fibra": 2.0,
        "agua": 85.7,
        "minerales": {
          "calcio": 6.0,
          "Hierro": 0.4,
          "Yodo": 2.0,
          "Magnesio": 5.0,
          "Zinc": 0.1,
          "Sodio": 12.0,
          "Potasio": 120.0,
          "Fosforo": 16.0,
          "Selenio": 0.0
        },
        "vitaminas": {
          "Tiamina": 0.04,
          "Riboflavina": 0.04,
          "Niacina": 0.2,
          "B6": 0.03,
          "Folatos": 5.0,
          "B12": 0.0,
          "C": 2.0,
          "A": 3.0,
          "D": 0.0,
          "E": 0.2
        }
      },
      "imagen": "https://5aldia.cl/wp-content/uploads/2018/03/manzana.jpg"
    },
    {
      "nombre": "Melocot\u00f3n",
      "tipo": "Fruta",
      "macros": {
        "calorias": 41.0,
        "proteinas": 0.6,
        "grasas": 0.0,
        "AGSaturados": 0.0,
        "AGMonoInSaturados": 0.0,
        "AGPoliinsaturados": 0.0,
        "Omega3": 0.0,
        "C182Linoleico": 0.0,
        "Colesterol": 0.0,
        "carbohidratos": 9.0,
        "fibra": 1.4,
        "agua": 89.0,
        "minerales": {
          "calcio": 8.0,
          "Hierro": 0.4,
          "Yodo": 3.0,
          "Magnesio": 9.0,
          "Zinc": 0.06,
          "Sodio": 3.0,
          "Potasio": 260.0,
          "Fosforo": 22.0,
          "Selenio": 1.0
        },
        "vitaminas": {
          "Tiamina": 0.03,
          "Riboflavina": 0.05,
          "Niacina": 1.0,
          "B6": 0.02,
          "Folatos": 3.0,
          "B12": 0.0,
          "C": 8.0,
          "A": 83.3,
          "D": 0.0,
          "E": 0.0
        }
      },
      "imagen": "https://lh6.googleusercontent.com/proxy/E5CY5Q6vG1Gag5WVAU-RSrg4s-xmkZiV5B7-EBS2B68f1rYNugQyldT_Z9brbe7TpFB8jSkmmxFq1MiXHikTHqiz6VtaMnRmBv1ID1TAKWfU2KWy4-CKD7xEObEW53hcxcP0FH_xiQ2tv1Js"
    },
    {
      "nombre": "Melocoton en almibar",
      "tipo": "Fruta",
      "macros": {
        "calorias": 92.0,
        "proteinas": 0.4,
        "grasas": 0.0,
        "AGSaturados": 0.0,
        "AGMonoInSaturados": 0.0,
        "AGPoliinsaturados": 0.0,
        "Omega3": 0.0,
        "C182Linoleico": 0.0,
        "Colesterol": 0.0,
        "carbohidratos": 22.0,
        "fibra": 1.0,
        "agua": 76.6,
        "minerales": {
          "calcio": 6.0,
          "Hierro": 0.4,
          "Yodo": 2.0,
          "Magnesio": 6.0,
          "Zinc": 0.03,
          "Sodio": 1.0,
          "Potasio": 150.0,
          "Fosforo": 13.0,
          "Selenio": 0.3
        },
        "vitaminas": {
          "Tiamina": 0.02,
          "Riboflavina": 0.02,
          "Niacina": 0.0,
          "B8": 0.02,
          "Folatos": 3.0,
          "B12": 0.0,
          "C": 4.0,
          "A": 42.0,
          "D": 0.0,
          "E": 0.0
        }
      },
      "imagen": "https://imag.bonviveur.com/melocoton-en-almibar.jpg"
    },
    {
      "nombre": "Melon",
      "tipo": "Fruta",
      "macros": {
        "calorias": 28.0,
        "proteinas": 0.6,
        "grasas": 0.0,
        "AGSaturados": 0.0,
        "AGMonoInSaturados": 0.0,
        "AGPoliinsaturados": 0.0,
        "Omega3": 0.0,
        "C182Linoleico": 0.0,
        "Colesterol": 0.0,
        "carbohidratos": 6.0,
        "fibra": 1.0,
        "agua": 92.4,
        "minerales": {
          "calcio": 14.0,
          "Hierro": 0.4,
          "Yodo": 0.0,
          "Magnesio": 17.0,
          "Zinc": 0.1,
          "Sodio": 14.0,
          "Potasio": 320.0,
          "Fosforo": 18.0,
          "Selenio": 0.0
        },
        "vitaminas": {
          "Tiamina": 0.04,
          "Riboflavina": 0.02,
          "Niacina": 0.5,
          "B8": 0.07,
          "Folatos": 30.0,
          "B12": 0.0,
          "C": 25.0,
          "A": 3.0,
          "D": 0.0,
          "E": 0.1
        }
      },
      "imagen": "https://www.gastronomiavasca.net/uploads/image/file/3392/w700_melon.jpg"
    },
    {
      "nombre": "Membrillo",
      "tipo": "Fruta",
      "macros": {
        "calorias": 42.0,
        "proteinas": 0.4,
        "grasas": 0.0,
        "AGSaturados": 0.0,
        "AGMonoInSaturados": 0.0,
        "AGPoliinsaturados": 0.0,
        "Omega3": 0.0,
        "C182Linoleico": 0.0,
        "Colesterol": 0.0,
        "carbohidratos": 6.8,
        "fibra": 6.4,
        "agua": 86.4,
        "minerales": {
          "calcio": 14.0,
          "Hierro": 0.4,
          "Yodo": 0.0,
          "Magnesio": 6.0,
          "Zinc": 3.0,
          "Sodio": 3.0,
          "Potasio": 200.0,
          "Fosforo": 19.0,
          "Selenio": 0.6
        },
        "vitaminas": {
          "Tiamina": 0.02,
          "Riboflavina": 0.02,
          "Niacina": 0.2,
          "B8": 0.0,
          "Folatos": 0.0,
          "B12": 0.0,
          "C": 13.0,
          "A": 0.0,
          "D": 0.0,
          "E": 0.0
        }
      },
      "imagen": "https://static.libertyprim.com/files/familles/coing-large.jpg?1569271744"
    },
    {
      "nombre": "Mora",
      "tipo": "Fruta",
      "macros": {
        "calorias": 39.0,
        "proteinas": 0.9,
        "grasas": 0.2,
        "AGSaturados": 0.0,
        "AGMonoInSaturados": 0.1,
        "AGPoliinsaturados": 0.1,
        "Omega3": 0.0,
        "C182Linoleico": 0.0,
        "Colesterol": 0.0,
        "carbohidratos": 5.1,
        "fibra": 6.6,
        "agua": 87.2,
        "minerales": {
          "calcio": 41.0,
          "Hierro": 0.7,
          "Yodo": 0.0,
          "Magnesio": 23.0,
          "Zinc": 0.2,
          "Sodio": 2.0,
          "Potasio": 160.0,
          "Fosforo": 31.0,
          "Selenio": 0.0
        },
        "vitaminas": {
          "Tiamina": 0.02,
          "Riboflavina": 0.05,
          "Niacina": 0.6,
          "B8": 0.05,
          "Folatos": 34.0,
          "B12": 0.0,
          "C": 15.0,
          "A": 13.3,
          "D": 0.0,
          "E": 2.37
        }
      },
      "imagen": "https://5aldia.cl/wp-content/uploads/2018/03/mora.jpg"
    },
    {
      "nombre": "Naranja",
      "tipo": "Fruta",
      "macros": {
        "calorias": 42.0,
        "proteinas": 0.8,
        "grasas": 0.0,
        "AGSaturados": 0.0,
        "AGMonoInSaturados": 0.0,
        "AGPoliinsaturados": 0.0,
        "Omega3": 0.0,
        "C182Linoleico": 0.0,
        "Colesterol": 0.0,
        "carbohidratos": 8.6,
        "fibra": 2.0,
        "agua": 88.6,
        "minerales": {
          "calcio": 36.0,
          "Hierro": 0.3,
          "Yodo": 2.0,
          "Magnesio": 12.0,
          "Zinc": 0.18,
          "Sodio": 3.0,
          "Potasio": 200.0,
          "Fosforo": 28.0,
          "Selenio": 1.0
        },
        "vitaminas": {
          "Tiamina": 0.1,
          "Riboflavina": 0.03,
          "Niacina": 0.3,
          "B8": 0.06,
          "Folatos": 37.0,
          "B12": 0.0,
          "C": 50.0,
          "A": 40.0,
          "D": 0.0,
          "E": 0.2
        }
      },
      "imagen": "https://i.pinimg.com/550x/b2/38/62/b23862aabbcdc7146588c4fa641c7414.jpg"
    },
    {
      "nombre": "Nispero",
      "tipo": "Fruta",
      "macros": {
        "calorias": 69.0,
        "proteinas": 0.4,
        "grasas": 0.5,
        "AGSaturados": 0.0,
        "AGMonoInSaturados": 0.0,
        "AGPoliinsaturados": 0.0,
        "Omega3": 0.0,
        "C182Linoleico": 0.0,
        "Colesterol": 0.0,
        "carbohidratos": 10.6,
        "fibra": 10.2,
        "agua": 78.3,
        "minerales": {
          "calcio": 30.0,
          "Hierro": 0.4,
          "Yodo": 0.0,
          "Magnesio": 11.0,
          "Zinc": 0.18,
          "Sodio": 6.0,
          "Potasio": 250.0,
          "Fosforo": 28.0,
          "Selenio": 0.5
        },
        "vitaminas": {
          "Tiamina": 0.03,
          "Riboflavina": 0.06,
          "Niacina": 0.4,
          "B8": 0.0,
          "Folatos": 0.0,
          "B12": 0.0,
          "C": 2.0,
          "A": 160.0,
          "D": 0.0,
          "E": 0.0
        }
      },
      "imagen": "https://safirfruits.es/wp-content/uploads/2021/11/nispero-3-Exotic-1024x971.jpg"
    },
    {
      "nombre": "Pera",
      "tipo": "Fruta",
      "macros": {
        "calorias": 49.0,
        "proteinas": 0.4,
        "grasas": 0.0,
        "AGSaturados": 0.0,
        "AGMonoInSaturados": 0.0,
        "AGPoliinsaturados": 0.0,
        "Omega3": 0.0,
        "C182Linoleico": 0.0,
        "Colesterol": 0.0,
        "carbohidratos": 10.6,
        "fibra": 2.3,
        "agua": 86.7,
        "minerales": {
          "calcio": 12.0,
          "Hierro": 0.2,
          "Yodo": 2.0,
          "Magnesio": 7.0,
          "Zinc": 0.14,
          "Sodio": 2.0,
          "Potasio": 130.0,
          "Fosforo": 17.5,
          "Selenio": 0.0
        },
        "vitaminas": {
          "Tiamina": 0.03,
          "Riboflavina": 0.03,
          "Niacina": 0.2,
          "B8": 0.02,
          "Folatos": 11.0,
          "B12": 0.0,
          "C": 3.0,
          "A": 10.0,
          "D": 0.0,
          "E": 0.0
        }
      },
      "imagen": "https://www.herbazest.com/imgs/d/8/7/551784/pera.jpg"
    },
    {
      "nombre": "Pi\u00f1a",
      "tipo": "Fruta",
      "macros": {
        "calorias": 50.0,
        "proteinas": 0.5,
        "grasas": 0.0,
        "AGSaturados": 0.0,
        "AGMonoInSaturados": 0.0,
        "AGPoliinsaturados": 0.0,
        "Omega3": 0.0,
        "C182Linoleico": 0.0,
        "Colesterol": 0.0,
        "carbohidratos": 11.5,
        "fibra": 1.2,
        "agua": 86.8,
        "minerales": {
          "calcio": 12.0,
          "Hierro": 0.5,
          "Yodo": 30.0,
          "Magnesio": 14.0,
          "Zinc": 0.15,
          "Sodio": 2.0,
          "Potasio": 250.0,
          "Fosforo": 11.0,
          "Selenio": 0.0
        },
        "vitaminas": {
          "Tiamina": 0.07,
          "Riboflavina": 0.02,
          "Niacina": 0.3,
          "B8": 0.09,
          "Folatos": 11.0,
          "B12": 0.0,
          "C": 20.0,
          "A": 13.0,
          "D": 0.0,
          "E": 0.1
        }
      },
      "imagen": "https://www.gob.mx/cms/uploads/image/file/415269/pi_a_1.jpg"
    },
    {
      "nombre": "Platano",
      "tipo": "Fruta",
      "macros": {
        "calorias": 94.0,
        "proteinas": 1.2,
        "grasas": 0.3,
        "AGSaturados": 0.11,
        "AGMonoInSaturados": 0.04,
        "AGPoliinsaturados": 0.09,
        "Omega3": 0.052,
        "C182Linoleico": 0.039,
        "Colesterol": 0.0,
        "carbohidratos": 20.0,
        "fibra": 3.4,
        "agua": 75.1,
        "minerales": {
          "calcio": 9.0,
          "Hierro": 0.6,
          "Yodo": 2.0,
          "Magnesio": 38.0,
          "Zinc": 0.23,
          "Sodio": 1.0,
          "Potasio": 350.0,
          "Fosforo": 28.0,
          "Selenio": 1.0
        },
        "vitaminas": {
          "Tiamina": 0.06,
          "Riboflavina": 0.07,
          "Niacina": 0.8,
          "B8": 0.51,
          "Folatos": 22.0,
          "B12": 0.0,
          "C": 10.0,
          "A": 18.0,
          "D": 0.0,
          "E": 0.2
        }
      },
      "imagen": "https://esnaturalbarcelona.com/wp-content/uploads/2018/09/platanos-de-canarias.jpg"
    },
    {
      "nombre": "Pomelo",
      "tipo": "Fruta",
      "macros": {
        "calorias": 35.0,
        "proteinas": 0.8,
        "grasas": 0.1,
        "AGSaturados": 0.0,
        "AGMonoInSaturados": 0.0,
        "AGPoliinsaturados": 0.0,
        "Omega3": 0.0,
        "C182Linoleico": 0.0,
        "Colesterol": 0.0,
        "carbohidratos": 6.8,
        "fibra": 1.6,
        "agua": 90.7,
        "minerales": {
          "calcio": 23.0,
          "Hierro": 0.1,
          "Yodo": 0.0,
          "Magnesio": 9.0,
          "Zinc": 0.0,
          "Sodio": 3.0,
          "Potasio": 200.0,
          "Fosforo": 20.0,
          "Selenio": 1.0
        },
        "vitaminas": {
          "Tiamina": 0.05,
          "Riboflavina": 0.02,
          "Niacina": 0.4,
          "B8": 0.03,
          "Folatos": 26.0,
          "B12": 0.0,
          "C": 36.0,
          "A": 2.0,
          "D": 0.0,
          "E": 0.19
        }
      },
      "imagen": "https://t1.uc.ltmcdn.com/es/posts/5/3/5/contraindicaciones_del_pomelo_39535_orig.jpg"
    },
    {
      "nombre": "Sandia",
      "tipo": "Fruta",
      "macros": {
        "calorias": 21.0,
        "proteinas": 0.4,
        "grasas": 0.0,
        "AGSaturados": 0.0,
        "AGMonoInSaturados": 0.0,
        "AGPoliinsaturados": 0.0,
        "Omega3": 0.0,
        "C182Linoleico": 0.0,
        "Colesterol": 0.0,
        "carbohidratos": 4.5,
        "fibra": 0.5,
        "agua": 94.6,
        "minerales": {
          "calcio": 7.0,
          "Hierro": 0.3,
          "Yodo": 0.0,
          "Magnesio": 11.0,
          "Zinc": 0.1,
          "Sodio": 4.0,
          "Potasio": 120.0,
          "Fosforo": 5.5,
          "Selenio": 0.0
        },
        "vitaminas": {
          "Tiamina": 0.02,
          "Riboflavina": 0.02,
          "Niacina": 0.3,
          "B8": 0.07,
          "Folatos": 3.0,
          "B12": 0.0,
          "C": 5.0,
          "A": 33.0,
          "D": 0.0,
          "E": 0.1
        }
      },
      "imagen": "https://ofercampo.co/uploads/products/57/image-20201109-223823655.jpg"
    },
    {
      "nombre": "Uva",
      "tipo": "Fruta",
      "macros": {
        "calorias": 69.0,
        "proteinas": 0.6,
        "grasas": 0.0,
        "AGSaturados": 0.0,
        "AGMonoInSaturados": 0.0,
        "AGPoliinsaturados": 0.0,
        "Omega3": 0.0,
        "C182Linoleico": 0.0,
        "Colesterol": 0.0,
        "carbohidratos": 16.1,
        "fibra": 0.9,
        "agua": 82.4,
        "minerales": {
          "calcio": 17.0,
          "Hierro": 0.4,
          "Yodo": 2.0,
          "Magnesio": 10.0,
          "Zinc": 0.1,
          "Sodio": 2.0,
          "Potasio": 250.0,
          "Fosforo": 22.0,
          "Selenio": 1.0
        },
        "vitaminas": {
          "Tiamina": 0.04,
          "Riboflavina": 0.02,
          "Niacina": 0.3,
          "B8": 0.1,
          "Folatos": 6.0,
          "B12": 0.0,
          "C": 4.0,
          "A": 3.0,
          "D": 0.0,
          "E": 0.0
        }
      },
      "imagen": "https://www.gastronomiavasca.net/uploads/image/file/3436/uva_morada.jpg"
    }
  ]



  getAllFruits() {
    return this.fruits;
  }

  getFruit(name: string) {
    return this.fruits.find(fruit => fruit.nombre === name);
  }


}
