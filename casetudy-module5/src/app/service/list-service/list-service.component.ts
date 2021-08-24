import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit {
  serviceList = [];

  constructor() {
    this.serviceList.push({
      idService: 123,
      nameService: 'vip villar',
      areaService: 34,
      numberOfFloors: 4,
      maxPeople: 7,
      cost: 234,
      idRentType: 2,
      statusService: 'avaiable'
    });
  }

  ngOnInit(): void {
  }

}
