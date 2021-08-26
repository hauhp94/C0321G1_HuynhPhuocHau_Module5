import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EmployeeServiceService} from '../../employee/employee-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceServiceService} from '../service-service.service';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.css']
})
export class EditServiceComponent implements OnInit {
  editServiceForm = new FormGroup({
    idService: new FormControl('', Validators.required),
    nameService: new FormControl('', Validators.required),
    areaService: new FormControl('', Validators.required),
    numberOfFloors: new FormControl('', Validators.required),
    maxPeople: new FormControl('', Validators.required),
    cost: new FormControl('', [Validators.required, Validators.min(500000)]),
    idRentType: new FormControl('', Validators.required),
    statusService: new FormControl('', Validators.required),
    codeService: new FormControl('', [Validators.required, Validators.pattern('^DV-\\d{4}$')]),
  });
  rentTypeList = ['Ngay', 'Thang', 'Nam'];
  id: number;

  constructor(private serviceServiceService: ServiceServiceService,
              private activatedRoute: ActivatedRoute, private router: Router) {
    this.id = Number(activatedRoute.snapshot.params.id);
    console.log('id: ' + this.id);
    console.log('id type : ' + typeof this.id);
    const service = this.findServiceById(this.id);
    console.log('name: ' + service.nameService);
    this.editServiceForm.setValue(service);
  }

  ngOnInit(): void {
  }
  onSubmitUpdate() {
    const service = this.editServiceForm.value;
    this.serviceServiceService.updateService(this.id, service);
    this.serviceServiceService.message = 'update service ok';
    this.router.navigateByUrl('service/list');
  }

  private findServiceById(id: number) {
    return this.serviceServiceService.findById(id);

  }
}
