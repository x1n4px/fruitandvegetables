import { Component, OnInit } from '@angular/core';
import { CountryService } from '../service/country.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  isDropdownOpen = false;
  selectedCountry = 'España';
  selectedFlag = '../../assets/country/spain.png';

  constructor(private countryService: CountryService) {}

  ngOnInit() {


    // Emitir el valor inicial a través del servicio
    this.countryService.updateCountry(this.selectedCountry);
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectCountry(country: string, flag: string) {
    this.selectedCountry = country;
    this.selectedFlag = flag;
    this.isDropdownOpen = false;

    // Emitir el cambio a través del servicio
    this.countryService.updateCountry(country);
  }
}
