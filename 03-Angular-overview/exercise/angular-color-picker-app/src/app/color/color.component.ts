import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  myColor = 'black';

  constructor() {
  }

  ngOnInit(): void {
  }

  changeToYellow() {
    this.myColor = 'yellow';
  }

  changeToRed() {
    this.myColor = 'red';
  }

  changeToBlue() {
    this.myColor = 'blue';
  }
}
