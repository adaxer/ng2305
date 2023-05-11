import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { IProduct } from './IProduct';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductService) { }
  title = 'BDE-Products';
  isBusy = false;
  showImage = false;
  products?: Array<IProduct> = undefined; // = [];

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (p) => this.products = p,
      error: (e) => console.log(e),
      complete: () => console.log("Complete")
    });

    this.getData();
  }
  async getData() {
    this.isBusy = true;
    let p = await this.productService.getProduct(1);
    console.log(p, p.productId);
    let q = await this.productService.getProduct(p.productId+1);
    console.log(q, q.productId);
    let r = await this.productService.getProduct(q.productId+3);
    console.log(r, r.productId);
    this.isBusy = false;
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
