import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { IProduct } from './IProduct';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnChanges {
  constructor(private productService: ProductService) {}
  title = 'Webshop im Moos';
  showImage = false;
  myRating = 5.0;
  products?: Array<IProduct> = undefined; // = [];

  ngOnInit(): void {
    // this.products = this.productService.getProducts();
    this.productService.getApiProducts().subscribe(
      // this.productService.getProductsInterval(3000).subscribe(
      products => {
        this.products = products;
      },
      error => {
        console.log(<HttpErrorResponse>error);
      },
      () => console.log('Observable.complete')
    );
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onRatingChanged(newRating: number): void {
    this.title = `A star rating changed to ${newRating}, but which one?`;
    // this.products[0].starRating = newRating;
    console.log(this.products![0]);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
}
