import {Injectable} from '@angular/core';
import {Service} from './service';

@Injectable({
  providedIn: 'root'
})
export class ServiceServiceService {
  serviceList: Service[] = [{
    idService: 123,
    nameService: 'vip villar',
    areaService: 34,
    numberOfFloors: 4,
    maxPeople: 7,
    cost: 234,
    idRentType: 2,
    statusService: 'avaiable',
    codeService: 'DV-5342'
  }, {
    idService: 123,
    nameService: 'vip villar',
    areaService: 34,
    numberOfFloors: 4,
    maxPeople: 7,
    cost: 234,
    idRentType: 2,
    statusService: 'avaiable',
    codeService: 'DV-5342'
  }];
  message: string;

  constructor() {
  }

  updateService(id: number, service: any) {
    for (let i = 0; i < this.serviceList.length; i++) {
      if (this.serviceList[i].idService === id) {
        this.serviceList[i] = service;
      }
    }
  }

  findById(id: number) {
    return this.serviceList.find(service => service.idService === id);
  }
}
