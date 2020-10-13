import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'

@Component({
  selector: 'product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.scss']
})
export class ProductCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de produtos',
      icon: 'storefront',
      routerUrl: '/products'
    }
  }

  ngOnInit(): void {
  }

  navigateToProductCreate() {
    this.router.navigate(['/products/create'])
  }



}
