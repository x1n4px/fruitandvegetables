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
export class FruitsComponent implements OnInit{

  fruits: any[] = [];

  constructor(private dataService: DataService, private router: Router) { }


  ngOnInit(): void {
    this.fruits = this.dataService.getAllFruits();
  }


  getFruitsOrderByFiber() {
    return this.fruits.sort((a, b) => a.macros.fibra - b.macros.fibra);
  }

  goTo(name: string): void {
    console.log(name)
    this.router.navigate(['data/', name]);
  }

}
