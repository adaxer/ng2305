import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IProduct } from './IProduct';
import { ProductService } from './product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html'
})
export class ProductFormComponent {
  product: IProduct = {
    productId: 0,
    productName: '',
    price: 0,
    starRating: 0
  };

  constructor(private productService : ProductService, private router: Router){}

  onSubmit(form: NgForm) {
    console.log('Form submitted!', this.product);
    this.productService.saveProduct(this.product).subscribe({
      next: p => {
        console.log(`Saved ${p.productId}`);
        this.reset(form);
      }
    })
  }

  reset(form: NgForm) {
    form.resetForm();
    this.product = {
      productId: 0,
      productName: '',
      price: 0,
      starRating:0
    };
  }

  cancel() {
    this.router.navigate(['/products']);
  }
}
