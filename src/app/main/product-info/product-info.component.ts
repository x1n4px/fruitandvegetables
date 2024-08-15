import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-info',
  standalone: true,
  imports: [],
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.css'
})
export class ProductInfoComponent implements OnInit {

  product: any = {};

  constructor(private dataService: DataService, private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name')!;

    this.product = this.dataService.getFruit(name)
  }
}
