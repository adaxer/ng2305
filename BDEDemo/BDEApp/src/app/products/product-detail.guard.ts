import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductDetailsComponent } from './product-details.component';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanDeactivate<ProductDetailsComponent> {
  canDeactivate(pd: ProductDetailsComponent): boolean {
    return !pd.hasChanges;
  }
}
