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


  toggleForm = true;
  authError : string = "";
  constructor(private seller : SellerService, private router : Router){ }
  // toggleForm -> true ? show sign-up and block login : show login block sign-up

  ngOnInit():void {
    this.seller.reloadSeller();
  }

  signUp(data : SignUp):void{
    this.seller.userSignUp(data);
    this.seller.isSignUpFailed.subscribe((isFailed) => {
      this.authError = "Faced some error try agian later";
    })
  }

  login(data : Login) : void{
    this.seller.userLogin(data);
    this.seller.isLoginFailed.subscribe((isFailed) => {
      this.authError = "Invaldi credentials";
    })
  }

  toggleFormLink(){
    this.toggleForm = !this.toggleForm;
    this.authError = "";
  }

}
