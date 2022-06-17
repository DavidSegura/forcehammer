import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datasheet',
  templateUrl: './datasheet.component.html',
  styleUrls: ['./datasheet.component.css']
})
export class DatasheetComponent implements OnInit {
  public attrModel: Array<string>;
  public attrUnit: Array<string>;

  constructor() {
    this.attrModel = new Array("No.", "M", "HA", "HP", "F", "R", "H", "A", "L", "S");
    this.attrUnit = new Array("1","6" ,"+2" ,"+2" ,"4" ,"4" ,"5" ,"4" ,"8" ,"+3");
  }

  ngOnInit(): void {
  }

}
