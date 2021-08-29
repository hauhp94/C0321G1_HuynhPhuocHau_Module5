import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  createEmployeeForm = new FormGroup({
    id: new FormControl('', Validators.required),
    nameEmployee: new FormControl('', Validators.required),
    idPosition: new FormControl('', Validators.required),
    idEducation: new FormControl('', Validators.required),
    idDivision: new FormControl('', Validators.required),
    dateOfBirthEmployee: new FormControl('', Validators.required),
    idCardEmployee: new FormControl('', Validators.required),
    salaryEmployee: new FormControl('', Validators.required),
    phoneEmployee: new FormControl('', [Validators.required, Validators.pattern('^(09[0,1]\\d{7})$|^(\\(84\\)9[0,1]\\d{7})$')]),
    emailEmployee: new FormControl('', Validators.required),
    addressEmployee: new FormControl('', Validators.required),
    codeEmployee: new FormControl('', [Validators.required, Validators.pattern('^NV-\\d{4}$')])
  });
  positionList = ['Giam doc', 'Phuc Vu', 'Le tan'];
  educationList = ['Dai hoc', 'Cao Dang', 'Trung Cap'];
  divisionList = ['Sale', 'Quan ly', 'Makerting'];

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.createEmployeeForm.value);
  }
}
