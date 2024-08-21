import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fruits',
  standalone: true,
  imports: [],
  templateUrl: './fruits.component.html',
  styleUrl: './fruits.component.css'
})
export class FruitsComponent implements OnInit {


  fruits: any[] = [];

  orderedList: any[] = [];

  orderMacro: string = 'calorias';

  measurementValue: string = 'g';

  constructor(private dataService: DataService, private router: Router) { }


  ngOnInit(): void {
    this.fruits = this.dataService.getAllFruits();
    this.orderedList = this.orderedList = this.fruits.sort();
  }

  filterFruits(selectedAttribute : any) {
    const attribute = selectedAttribute.value;
    this.measurementValue = this.dataService.getMeasurementUnit(attribute);
    if (attribute) {
      this.orderMacro = attribute;
      this.orderedList = this.getFruitsOrderedBy(attribute);
    } else if(attribute === 'undefined') {
     this.orderedList = this.fruits.sort((a, b) => a.name.localeCompare(b.name));
    }
  }



  getFruitsOrderedBy(attribute = 'fibra') {
    return this.fruits
      .map(fruit => this.flattenFruitData(fruit)) // Aplana los datos
      .sort((a, b) => b[attribute] - a[attribute]);
  }


  flattenFruitData(fruit:any) {
    return {
      ...fruit,
      ...fruit.macros,
      ...fruit.macros.minerales,
      ...fruit.macros.vitaminas
    };
  }





  goTo(name: string): void {
    console.log(name)
    this.router.navigate(['data/', name]);
  }

}
