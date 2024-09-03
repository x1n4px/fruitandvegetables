import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CountryService } from '../../service/country.service';

@Component({
  selector: 'app-fruits',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './fruits.component.html',
  styleUrl: './fruits.component.css'
})
export class FruitsComponent implements OnInit {



  selectedMacro: string = 'calorias'; // Preselecciona el valor como 'undefined'
  isFruitSelected: boolean = false; // Preselección: desmarcado
  isVegetableSelected: boolean = false; // Preselección: desmarcado
  searchQuery: string = '';


  fruits: any[] = [];

  orderedList: any[] = [];

  orderMacro: string = 'calorias';

  measurementValue: string = 'g';

  storedCountry: string = 'ES';

  constructor(private dataService: DataService, private router: Router, private countryService: CountryService) {

  }


  ngOnInit(): void {
    this.fruits = this.dataService.getAllFruits();
    this.orderedList = this.orderedList = this.fruits.sort();
    this.storedCountry = 'ES'
    // Suscribirse a los cambios en el país seleccionado
    this.countryService.selectedCountry$.subscribe(country => {
      this.storedCountry = country;
    });

  }

  filterFruits(selectedAttribute: any) {
    const attribute = selectedAttribute.value;
    this.measurementValue = this.dataService.getMeasurementUnit(attribute);
    if (attribute) {
      this.orderMacro = attribute;
      this.orderedList = this.getFruitsOrderedBy(attribute);
    } else if (attribute === 'undefined') {
      this.orderedList = this.fruits.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }));
    }
  }



  getFruitsOrderedBy(attribute = 'fibra') {
    return this.fruits
      .sort((a, b) => b[attribute] - a[attribute]);
  }


  // Método para aplicar los filtros
  applyFilters() {
    this.orderedList = this.fruits.filter(fruit => {
      const matchesCategory = (this.isFruitSelected && fruit.tipo === 'Fruta') ||
        (this.isVegetableSelected && fruit.tipo === 'Verdura');
      const matchesSearch = !this.searchQuery || fruit.nombre.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchesMacro = this.getFruitsOrderedBy(this.selectedMacro);

      return matchesCategory && matchesSearch && matchesMacro;
    });
  }

  // Método para limpiar los filtros
  clearFilters() {
    this.selectedMacro = 'undefined';
    this.isFruitSelected = false;
    this.isVegetableSelected = false;
    this.searchQuery = '';
    this.orderedList = [...this.fruits]; // Resetea la lista filtrada a la lista completa
  }




  goTo(name: string): void {
    this.router.navigate(['data/', name]);
  }

}
