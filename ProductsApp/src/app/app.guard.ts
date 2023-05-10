import { Injectable } from '@angular/core';
import {
  CanLoad,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Route,
  CanActivate
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppGuard implements CanLoad, CanActivate {
  canActivate(): boolean | Observable<boolean> | Promise<boolean> {
    return true;
  }
  canLoad(): boolean {
    return true;
  }
}
