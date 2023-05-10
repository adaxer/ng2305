import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { IProduct } from './IProduct';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnChanges {
  constructor(private productService: ProductService) { }
  title = 'BDE-Products';
  showImage = false;
  myRating = 5.0;
  products?: Array<IProduct> = undefined; // = [];

  ngOnInit(): void {
    this.productService.getApiProducts().subscribe({
      next: (p) => this.products = p,
      error: (e) => console.log(e),
      complete: () => console.log("Complete")
    });
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
