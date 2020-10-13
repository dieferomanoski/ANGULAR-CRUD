
import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.scss']
})
export class ProductReadComponent implements OnInit {

  products: Product[];
  displayedColumns = ['id', 'name', 'price', 'action']


  constructor(private productService: ProductService) { }

  ngOnInit(): void {


    this.productService.read().subscribe(products => {
      this.products = products;
      console.log(products)
    })
  }


}
