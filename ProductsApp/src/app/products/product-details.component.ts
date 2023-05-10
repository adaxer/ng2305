import { IProduct } from './IProduct';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  pageTitle = 'Details: ';
  get hasChanges(): boolean {
    return this.firstRating !== this.product?.starRating;
  }
  firstRating?: number;
product?: IProduct;
  constructor(private route: ActivatedRoute,
              private productService: ProductService) { }

  ngOnInit() {
    this.route.params.subscribe((p: Params) => {
      const id: number = +p['id'];
      this.product = this.productService.getProducts().filter(product => product.productId === id)[0];
      this.firstRating = this.product.starRating;
    });
  }
}
