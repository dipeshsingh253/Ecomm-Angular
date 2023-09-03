import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 
  menuType = "default";

  constructor(private route : Router){}

  ngOnInit() : void {
    this.route.events.subscribe((val : any) => {
      if(val.url){
        if(localStorage.getItem("seller") && val.url.includes("seller")){
          console.warn("Seller page");
          this.menuType = "seller";
        }else{
          console.warn("User page");
          this.menuType = "default";
        }
      }
    })
  }

}
