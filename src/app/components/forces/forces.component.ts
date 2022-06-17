import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forces',
  templateUrl: './forces.component.html',
  styleUrls: ['./forces.component.css']
})
export class ForcesComponent implements OnInit {
  public forces:Array<any>;

  constructor() { 
    this.forces = new Array(
      { "name": "Adepta Soronita", "icon": "adeptas_sororitas.jpg" }, 
      { "name": "Space Marines", "icon": "space_marines.jpg" }, 
      { "name": "Grey Knights", "icon": "grey_knights.jpg" });
  }

  ngOnInit(): void {
    console.table(this.forces);
  }

}
