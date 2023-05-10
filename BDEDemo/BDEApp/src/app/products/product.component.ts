import { OnChanges } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from './IProduct';

// Komponente nicht mehr benutzt, aber interessant zu behalten wegen @Input und OnChanges

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnChanges {
  constructor() {}

  hasChanges: boolean = false;

  @Input() product?: IProduct;

  @Input() showImage?: boolean;

  ngOnInit() {}

  ngOnChanges() {
    this.hasChanges = true;
  }
}
