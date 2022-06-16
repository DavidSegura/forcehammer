import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forces',
  templateUrl: './forces.component.html',
  styleUrls: ['./forces.component.css']
})
export class ForcesComponent implements OnInit {
  public forces:Array<any>;

  constructor() { 
    this.forces = new Array({"name": "Adepta Soronita"}, { "name": "Space Marines"}, { "name": "Grey Knights"});
  }

  ngOnInit(): void {
    console.table(this.forces);
  }

}
