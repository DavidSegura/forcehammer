import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css']
})
export class UnitsComponent implements OnInit {
  public forces:Array<any>;
  public find:string;

  constructor() { 
    this.find = "";
    this.forces = new Array(
      { "name": "Castellano", "icon": "adeptas_sororitas.jpg" }, 
      { "name": "Mariscal", "icon": "space_marines.jpg" }, 
      { "name": "Capellan", "icon": "grey_knights.jpg" });
  }

  ngOnInit(): void {
  }

  ngFind(): void{
    document.querySelector("#find")?.classList.toggle("show");
  }

}
