import { IProduct } from './IProduct';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from './product.service';
import { CloseDialogComponent } from './close-dialog.component';
import { Observable, Subject, of } from 'rxjs';
declare var window: any;

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  canClose = new Subject<boolean>();

  canDeactivate() : Observable<boolean> {

    if (!this.hasChanges) {
      return of(true);
    };

    this.closeDialog.show();
    return this.canClose;
  }

  pageTitle = 'Details: ';

  get hasChanges(): boolean {
    return this.firstRating !== this.product?.starRating;
  }

  firstRating?: number;
  product?: IProduct;
  closeDialog: any;

  constructor(private route: ActivatedRoute,
    private productService: ProductService) {
  }

  ngOnInit() {
    this.route.params.subscribe((p: Params) => {
      const id: number = +p['id'];
      this.loadProduct(id);
    });
    this.closeDialog = new window.bootstrap.Modal(
      document.getElementById('myModal')
    );
  }
  async loadProduct(id: number) {
    this.product = await this.productService.getProduct(id);
        this.firstRating = this.product.starRating;
  }

  setCloseOk(){
    this.closeDialog.hide();
    this.canClose.next(true);
  }
}
