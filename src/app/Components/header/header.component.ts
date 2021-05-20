import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  idioma : string = "SP";
  User : String;

  constructor() { }

  ngOnInit(): void {
    this.idioma = sessionStorage.getItem("Idioma");
    this.User = localStorage.getItem("User");
  }

  cambio_idioma(op:string):void {

    if(op == "SP"){
      this.idioma= "SP";
      sessionStorage.setItem("Idioma", op);
      window.location.reload();
    }
    if(op == "EN") {
      this.idioma= "EN";
      sessionStorage.setItem("Idioma", op);
      window.location.reload();
    }
  }

}
