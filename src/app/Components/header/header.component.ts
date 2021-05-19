import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  idioma : string = "SP";

  constructor() { }

  ngOnInit(): void {
    this.idioma =localStorage.getItem("Idioma");
  }

  cambio_idioma(op:string):void {

    if(op == "SP"){
      this.idioma= "SP";
      localStorage.setItem("Idioma", op);
      window.location.reload();
    }
    if(op == "EN") {
      this.idioma= "EN";
      localStorage.setItem("Idioma", op);
      window.location.reload();
    }
  }

}
