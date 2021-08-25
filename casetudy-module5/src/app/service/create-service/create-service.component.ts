import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css']
})
export class CreateServiceComponent implements OnInit {
  createServiceForm = new FormGroup({
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

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.createServiceForm.value);
  }
}
