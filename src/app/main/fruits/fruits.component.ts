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
      "nombre": "Manzana",
      "tipo": "Fruta",
      "color": "Rojo",
      "temporada": "Otoño",
      "beneficios": "Buena para la salud cardiovascular, rica en antioxidantes.",
      "macros": {
        "calorias": 52,
        "carbohidratos": 13.81,
        "azucares": 9.54,
        "proteinas": 0.26,
        "grasas": 0.17,
        "fibra": 2.4
      },
      "vitaminaC": 5,
      "potasio": 195,
      "imagen": "https://comedelahuerta.com/wp-content/uploads/2019/09/MANZANA-ROYAL-GALA-ECOLOGICO-COMEDELAHUERTA-1.jpg"
    },
    {
      "nombre": "Banana",
      "tipo": "Fruta",
      "color": "Amarillo",
      "temporada": "Todo el año",
      "beneficios": "Fuente de potasio, ideal para deportistas.",
      "macros": {
        "calorias": 89,
        "carbohidratos": 22.86,
        "azucares": 17.32,
        "proteinas": 1.09,
        "grasas": 0.33,
        "fibra": 2.6
      },
      "potasio": 422,
      "imagen": "https://www.shutterstock.com/image-photo/bunch-bananas-isolated-on-white-600nw-1722111529.jpg"
    },
    {
      "nombre": "Fresa",
      "tipo": "Fruta",
      "color": "Rojo",
      "temporada": "Primavera",
      "beneficios": "Rica en vitamina C y antioxidantes.",
      "macros": {
        "calorias": 32,
        "carbohidratos": 7.66,
        "azucares": 5.41,
        "proteinas": 0.7,
        "grasas": 0.3,
        "fibra": 2
      },
      "vitaminaC": 59,
      "imagen": "https://static.libertyprim.com/files/familles/fraise-large.jpg?1569271765"
    },
    {
      "nombre": "Naranja",
      "tipo": "Fruta",
      "color": "Naranja",
      "temporada": "Invierno",
      "beneficios": "Fuente de vitamina C, fortalece el sistema inmunológico.",
      "macros": {
        "calorias": 45,
        "carbohidratos": 11.76,
        "azucares": 9.32,
        "proteinas": 0.94,
        "grasas": 0.22,
        "fibra": 2.4
      },
      "vitaminaC": 53,
      "potasio": 237,
      "imagen": "https://www.ammarket.com/wp-content/uploads/2021/12/NARANJA_MESA_AMMARKET.COM_2.jpg"
    },
    {
      "nombre": "Uva",
      "tipo": "Fruta",
      "color": "Morado",
      "temporada": "Verano",
      "beneficios": "Rica en antioxidantes, buena para la salud cardiovascular.",
      "macros": {
        "calorias": 69,
        "carbohidratos": 17.2,
        "azucares": 15.48,
        "proteinas": 0.72,
        "grasas": 0.16,
        "fibra": 1.6
      },
      "imagen": "https://www.gastronomiavasca.net/uploads/image/file/3436/uva_morada.jpg"
    }
  ]

}
