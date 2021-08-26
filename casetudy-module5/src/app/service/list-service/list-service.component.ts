import {Component, OnInit} from '@angular/core';
import {Service} from '../service';
import {ServiceServiceService} from '../service-service.service';

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit {
  serviceList: Service[];
  message: string;

  constructor(private serviceServiceService: ServiceServiceService) {
    this.serviceList = serviceServiceService.serviceList;
    this.message = this.serviceServiceService.message;
  }

  ngOnInit(): void {
  }

}
