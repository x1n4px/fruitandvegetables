import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor() { }

   // Usamos BehaviorSubject para mantener el estado actual y emitir cambios
   private selectedCountrySubject = new BehaviorSubject<string>('España');
   selectedCountry$ = this.selectedCountrySubject.asObservable();

   // Método para actualizar el país seleccionado
   updateCountry(country: string) {
     this.selectedCountrySubject.next(country);
   }
}
