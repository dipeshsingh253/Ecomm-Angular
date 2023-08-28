import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { Login, SignUp } from '../data-types';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {

  constructor(private seller : SellerService, private router : Router){ }
  // toggleForm -> true ? show sign-up and block login : show login block sign-up
  toggleForm = true;

  ngOnInit():void {
    this.seller.reloadSeller();
  }

  signUp(data : SignUp):void{
    this.seller.userSignUp(data);
  }

  login(data : Login) : void{
    this.seller.userLogin(data);
  }

  toggleFormLink(){
    this.toggleForm = !this.toggleForm;
  }

}
