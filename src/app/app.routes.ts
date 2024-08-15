import { Routes } from '@angular/router';
import { FruitsComponent } from './main/fruits/fruits.component';
import { ProductInfoComponent } from './main/product-info/product-info.component';

export const routes: Routes = [
  {
    path: '', component: FruitsComponent,

  },
  {
    path: 'data/:name', component: ProductInfoComponent
  }
];
