import { IProduct } from './IProduct';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, interval, lastValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    baseUrl = 'https://localhost:5000/';

    constructor(private httpClient: HttpClient) {
    }

    getProducts(): Observable<IProduct[]> {
        return this.httpClient.get<IProduct[]>(`${this.baseUrl}products`);
    }

    getProduct(id: number) : Promise<IProduct> {
      return lastValueFrom(this.httpClient.get<IProduct>(`${this.baseUrl}products/${id}`));
    }

    saveProduct(product: IProduct) {
      let result = this.httpClient.post<IProduct>(`${this.baseUrl}products`, product);
      // result.subscribe({
      //   next: res => console.log(res)
      // })
      return result;
    }
}
