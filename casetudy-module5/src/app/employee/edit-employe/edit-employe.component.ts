import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerServiceService} from '../../customer/customer-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {EmployeeServiceService} from '../employee-service.service';

@Component({
  selector: 'app-edit-employe',
  templateUrl: './edit-employe.component.html',
  styleUrls: ['./edit-employe.component.css']
})
export class EditEmployeComponent implements OnInit {
  editEmployeeForm = new FormGroup({
    idEmployee: new FormControl('', Validators.required),
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
  id: number;

  constructor(private employeeServiceService: EmployeeServiceService,
              private activatedRoute: ActivatedRoute, private router: Router) {
    this.id = Number(activatedRoute.snapshot.params.id);
    console.log('id: ' + this.id);
    console.log('id type : ' + typeof this.id);
    const employee = this.findEmployeeById(this.id);
    console.log('name: ' + employee.nameEmployee);
    this.editEmployeeForm.setValue(employee);
  }

  ngOnInit(): void {
  }

  onSubmitUpdate() {
    const employee = this.editEmployeeForm.value;
    this.employeeServiceService.updateEmployee(this.id, employee);
    this.employeeServiceService.message = 'update ok';
    this.router.navigateByUrl('employee/list');
  }

  private findEmployeeById(id: number) {
    return this.employeeServiceService.findById(id);

  }
}
