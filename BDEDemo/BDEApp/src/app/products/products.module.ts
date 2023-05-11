import { ProductListComponent } from './product-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductDetailsComponent } from './product-details.component';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './product.component';
import { ProductFormComponent } from './product-form.component';
import { CloseDialogComponent } from './close-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    FormsModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ProductComponent,
    ProductFormComponent,
    CloseDialogComponent
  ]
})
export class ProductsModule { }
