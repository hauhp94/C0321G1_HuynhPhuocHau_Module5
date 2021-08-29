import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.productService.findAll().subscribe(value => this.products = value);
  }

  ngOnInit() {
    // this.getAll();
  }

  // getAll() {
  //   this.products = this.productService.findAll();
  // }

}
