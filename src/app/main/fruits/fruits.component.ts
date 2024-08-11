import { Component } from '@angular/core';

@Component({
  selector: 'app-fruits',
  standalone: true,
  imports: [],
  templateUrl: './fruits.component.html',
  styleUrl: './fruits.component.css'
})
export class FruitsComponent {

  fruits = [
    {
        "nombre": "Aguacate",
        "tipo": "Fruta",
        "macros": {
            "calorias": 141.0,
            "carbohidratos": 5.9,
            "proteinas": 1.5,
            "grasas": 12.0,
            "fibra": 1.8
        },
        "imagen": "https://exoticfruitbox.com/wp-content/uploads/2015/10/aguacate.jpg"
    },
    {
        "nombre": "Albaricoque",
        "tipo": "Fruta",
        "macros": {
            "calorias": 45.0,
            "carbohidratos": 9.5,
            "proteinas": 0.8,
            "grasas": 0.0,
            "fibra": 2.1
        },
        "imagen": "https://mejorconsalud.as.com/wp-content/uploads/2018/06/albaricoque.jpg"
    },
    {
        "nombre": "Caqui",
        "tipo": "Fruta",
        "macros": {
            "calorias": 73.0,
            "carbohidratos": 16.0,
            "proteinas": 0.7,
            "grasas": 0.3,
            "fibra": 1.6
        },
        "imagen": "https://fruittoday.com/wp-content/uploads/2022/09/caqui-engorda.jpg"
    },
    {
        "nombre": "Cereza",
        "tipo": "Fruta",
        "macros": {
            "calorias": 65.0,
            "carbohidratos": 13.5,
            "proteinas": 0.8,
            "grasas": 0.5,
            "fibra": 1.5
        },
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGw7o1aVv7SjG5aCOs0LDS_kZRtQzO32QQsw&s"
    },
    {
        "nombre": "Chirimoya",
        "tipo": "Fruta",
        "macros": {
            "calorias": 90.0,
            "carbohidratos": 20.0,
            "proteinas": 1.0,
            "grasas": 0.2,
            "fibra": 1.9
        },
        "imagen": "https://www.frutiban.com/wp-content/uploads/2017/12/chirimoya.jpg"
    },
    {
        "nombre": "Ciruela",
        "tipo": "Fruta",
        "macros": {
            "calorias": 51.0,
            "carbohidratos": 11.0,
            "proteinas": 0.6,
            "grasas": 0.0,
            "fibra": 2.1
        },
        "imagen": "https://www.frutasluzon.com/wp-content/uploads/2018/07/CIRUELA-ROJA-600x399.jpg"
    },
    {
        "nombre": "Coco",
        "tipo": "Fruta",
        "macros": {
            "calorias": 373.0,
            "carbohidratos": 3.7,
            "proteinas": 3.2,
            "grasas": 36.0,
            "fibra": 10.5
        },
        "imagen": "https://images.ecestaticos.com/XzFf5fJnhRqdwsyLzg_OYeT3jaY=/0x85:1896x1505/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F03c%2F61a%2Fca3%2F03c61aca3e0d45f3d52402f4ed27ab83.jpg"
    },
    {
        "nombre": "Frambuesa",
        "tipo": "Fruta",
        "macros": {
            "calorias": 40.0,
            "carbohidratos": 4.6,
            "proteinas": 1.4,
            "grasas": 0.3,
            "fibra": 6.7
        },
        "imagen": "https://lh6.googleusercontent.com/proxy/uDDyTBcWXilvgYjaecRumLLk4Zx9Ep9nJgVanLY2z1EL88W87ic6qdJX31DpbtTv6EadtDLWIIl2HIpfOUOSEu1XGUrJiHvwkxm9yarV8vyxsWw"
    },
    {
        "nombre": "Fresa",
        "tipo": "Fruta",
        "macros": {
            "calorias": 40.0,
            "carbohidratos": 7.0,
            "proteinas": 0.7,
            "grasas": 0.5,
            "fibra": 2.2
        },
        "imagen": "https://static.libertyprim.com/files/familles/fraise-large.jpg?1569271765"
    },
    {
        "nombre": "Granada",
        "tipo": "Fruta",
        "macros": {
            "calorias": 34.0,
            "carbohidratos": 7.5,
            "proteinas": 0.7,
            "grasas": 0.1,
            "fibra": 0.2
        },
        "imagen": "https://s1.ppllstatics.com/elcorreo/www/multimedia/202301/23/media/cortadas/despensa26-kUHH-U1903686388111LF-1248x770@El%20Correo.jpg"
    },
    {
        "nombre": "Grosella",
        "tipo": "Fruta",
        "macros": {
            "calorias": 32.0,
            "carbohidratos": 4.8,
            "proteinas": 1.1,
            "grasas": 0.2,
            "fibra": 3.5
        },
        "imagen": "https://static.libertyprim.com/files/familles/groseille-large.jpg?1569271784"
    },
    {
        "nombre": "Higo",
        "tipo": "Fruta",
        "macros": {
            "calorias": 85.0,
            "carbohidratos": 16.0,
            "proteinas": 1.2,
            "grasas": 0.0,
            "fibra": 2.5
        },
        "imagen": "https://frutasolivar.com/wp-content/uploads/2020/08/higos.jpg.webp"
    },
    {
        "nombre": "Kiwi",
        "tipo": "Fruta",
        "macros": {
            "calorias": 55.0,
            "carbohidratos": 10.6,
            "proteinas": 1.1,
            "grasas": 0.5,
            "fibra": 1.9
        },
        "imagen": "https://www.frutas-hortalizas.com/img/fruites_verdures/presentacio/14.jpg"
    },
    {
        "nombre": "Limon",
        "tipo": "Fruta",
        "macros": {
            "calorias": 44.0,
            "carbohidratos": 9.0,
            "proteinas": 0.7,
            "grasas": 0.4,
            "fibra": 1.0
        },
        "imagen": "https://www.quironsalud.com/idcsalud-client/cm/images?locale=es_ES&idMmedia=3153140"
    },
    {
        "nombre": "Mandarina",
        "tipo": "Fruta",
        "macros": {
            "calorias": 43.0,
            "carbohidratos": 9.0,
            "proteinas": 0.8,
            "grasas": 0.0,
            "fibra": 1.9
        },
        "imagen": "https://elpoderdelconsumidor.org/wp-content/uploads/2016/11/mandarina.jpg"
    },
    {
        "nombre": "Manzana",
        "tipo": "Fruta",
        "macros": {
            "calorias": 53.0,
            "carbohidratos": 12.0,
            "proteinas": 0.3,
            "grasas": 0.0,
            "fibra": 2.0
        },
        "imagen": "https://5aldia.cl/wp-content/uploads/2018/03/manzana.jpg"
    },
    {
        "nombre": "Melocoton",
        "tipo": "Fruta",
        "macros": {
            "calorias": 41.0,
            "carbohidratos": 9.0,
            "proteinas": 0.6,
            "grasas": 0.0,
            "fibra": 1.4
        },
        "imagen": "https://lh6.googleusercontent.com/proxy/E5CY5Q6vG1Gag5WVAU-RSrg4s-xmkZiV5B7-EBS2B68f1rYNugQyldT_Z9brbe7TpFB8jSkmmxFq1MiXHikTHqiz6VtaMnRmBv1ID1TAKWfU2KWy4-CKD7xEObEW53hcxcP0FH_xiQ2tv1Js"
    },
    {
        "nombre": "Melocoton en almibar",
        "tipo": "Fruta",
        "macros": {
            "calorias": 92.0,
            "carbohidratos": 22.0,
            "proteinas": 0.4,
            "grasas": 0.0,
            "fibra": 1.0
        },
        "imagen": "https://imag.bonviveur.com/melocoton-en-almibar.jpg"
    },
    {
        "nombre": "Melon",
        "tipo": "Fruta",
        "macros": {
            "calorias": 28.0,
            "carbohidratos": 6.0,
            "proteinas": 0.6,
            "grasas": 0.0,
            "fibra": 1.0
        },
        "imagen": "https://www.gastronomiavasca.net/uploads/image/file/3392/w700_melon.jpg"
    },
    {
        "nombre": "Membrillo",
        "tipo": "Fruta",
        "macros": {
            "calorias": 42.0,
            "carbohidratos": 6.8,
            "proteinas": 0.4,
            "grasas": 0.0,
            "fibra": 6.4
        },
        "imagen": "https://static.libertyprim.com/files/familles/coing-large.jpg?1569271744"
    },
    {
        "nombre": "Mora",
        "tipo": "Fruta",
        "macros": {
            "calorias": 39.0,
            "carbohidratos": 5.1,
            "proteinas": 0.9,
            "grasas": 0.2,
            "fibra": 6.6
        },
        "imagen": "https://5aldia.cl/wp-content/uploads/2018/03/mora.jpg"
    },
    {
        "nombre": "Naranja",
        "tipo": "Fruta",
        "macros": {
            "calorias": 42.0,
            "carbohidratos": 8.6,
            "proteinas": 0.8,
            "grasas": 0.0,
            "fibra": 2.0
        },
        "imagen": "https://i.pinimg.com/550x/b2/38/62/b23862aabbcdc7146588c4fa641c7414.jpg"
    },
    {
        "nombre": "Nispero",
        "tipo": "Fruta",
        "macros": {
            "calorias": 69.0,
            "carbohidratos": 10.6,
            "proteinas": 0.4,
            "grasas": 0.5,
            "fibra": 10.2
        },
        "imagen": "https://safirfruits.es/wp-content/uploads/2021/11/nispero-3-Exotic-1024x971.jpg"
    },
    {
        "nombre": "Pera",
        "tipo": "Fruta",
        "macros": {
            "calorias": 49.0,
            "carbohidratos": 10.6,
            "proteinas": 0.4,
            "grasas": 0.0,
            "fibra": 2.3
        },
        "imagen": "https://www.herbazest.com/imgs/d/8/7/551784/pera.jpg"
    },
    {
        "nombre": "Pi\u00f1a",
        "tipo": "Fruta",
        "macros": {
            "calorias": 50.0,
            "carbohidratos": 11.5,
            "proteinas": 0.5,
            "grasas": 0.0,
            "fibra": 1.2
        },
        "imagen": "https://www.gob.mx/cms/uploads/image/file/415269/pi_a_1.jpg"
    },
    {
        "nombre": "Platano",
        "tipo": "Fruta",
        "macros": {
            "calorias": 94.0,
            "carbohidratos": 20.0,
            "proteinas": 1.2,
            "grasas": 0.3,
            "fibra": 3.4
        },
        "imagen": "https://esnaturalbarcelona.com/wp-content/uploads/2018/09/platanos-de-canarias.jpg"
    },
    {
        "nombre": "Pomelo",
        "tipo": "Fruta",
        "macros": {
            "calorias": 35.0,
            "carbohidratos": 6.8,
            "proteinas": 0.8,
            "grasas": 0.1,
            "fibra": 1.6
        },
        "imagen": "https://t1.uc.ltmcdn.com/es/posts/5/3/5/contraindicaciones_del_pomelo_39535_orig.jpg"
    },
    {
        "nombre": "Sandia",
        "tipo": "Fruta",
        "macros": {
            "calorias": 21.0,
            "carbohidratos": 4.5,
            "proteinas": 0.4,
            "grasas": 0.0,
            "fibra": 0.5
        },
        "imagen": "https://ofercampo.co/uploads/products/57/image-20201109-223823655.jpg"
    },
    {
        "nombre": "Uva",
        "tipo": "Fruta",
        "macros": {
            "calorias": 69.0,
            "carbohidratos": 16.1,
            "proteinas": 0.6,
            "grasas": 0.0,
            "fibra": 0.9
        },
        "imagen": "https://www.gastronomiavasca.net/uploads/image/file/3436/uva_morada.jpg"
    }
]


getFruitsOrderByFiber() {
  return this.fruits.sort((a, b) => a.macros.fibra - b.macros.fibra);
}


}
