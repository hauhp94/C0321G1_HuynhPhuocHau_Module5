import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';
import {Product} from '../../model/product';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl()
  });
  categories: Category[] = [];

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private router: Router) {
    this.categoryService.findAll().subscribe(value =>
      this.categories = value);
  }

  ngOnInit(): void {
  }

  submit() {
    const product: Partial<Product> = {
      id: this.productForm.value.id,
      name: this.productForm.value.name,
      price: this.productForm.value.price,
      description: this.productForm.value.decription,
      category: this.productForm.value.category
    };
    this.productService.saveProduct(product).subscribe(value => console.log('create ok '));
    this.router.navigateByUrl('');
  }

}
