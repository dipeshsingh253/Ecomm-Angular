import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Login, SignUp } from '../data-types';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SellerService {

  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  constructor(private http : HttpClient, private router : Router) { }

  userSignUp(data : SignUp){
    const git_workspace = "https://studious-winner-p6xxq6wvgrw2rq6r-3000.app.github.dev/seller";
    const local_workspace = "http://localhost:3000/seller";
    this.http
    .post("https://studious-winner-p6xxq6wvgrw2rq6r-3000.app.github.dev/seller",data, {observe : "response"})
    .subscribe((res) => {
      this.isSellerLoggedIn.next(true);
      localStorage.setItem("seller",JSON.stringify(res.body));
      this.router.navigate(["seller-home"]);
    })
  }

  userLogin(data : Login){
    this.http
    .get(`https://studious-winner-p6xxq6wvgrw2rq6r-3000.app.github.dev/seller?email=${data.email}&password=${data.password}`)
    .subscribe((res) => {
      if(res){
        console.warn("user loged in with email :",res);
      }
    });
  }

  reloadSeller(){
    if(localStorage.getItem("seller")){
      this.isSellerLoggedIn.next(true);
      this.router.navigate(["seller-home"]);
    }
  }

}
