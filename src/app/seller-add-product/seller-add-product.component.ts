import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Product } from '../data-types';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {

  BASE_URL : string = "http://localhost:3000"

  constructor(private http: HttpClient){}

  addNewProduct(data : Product){
    console.warn(data);
    this.http
    .post(`${this.BASE_URL}/product`,data).subscribe((res) => {
        console.warn(res);
        
    });

  }

}
