import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerServiceService} from '../../customer/customer-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {EmployeeServiceService} from '../employee-service.service';
import {Employee} from '../employee';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-employe',
  templateUrl: './edit-employe.component.html',
  styleUrls: ['./edit-employe.component.css']
})
export class EditEmployeComponent implements OnInit {
  editEmployeeForm = new FormGroup({
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
  id: number;
  employee: Employee;

  constructor(private employeeServiceService: EmployeeServiceService,
              private activatedRoute: ActivatedRoute, private router: Router,
              private snackBar: MatSnackBar) {
    this.id = Number(activatedRoute.snapshot.params.id);
    console.log('id: ' + this.id);
    console.log('id type : ' + typeof this.id);
    this.employeeServiceService.findById(this.id).subscribe(value =>
      this.editEmployeeForm.setValue(value));
  }

  ngOnInit(): void {
  }

  onSubmitUpdate() {
    this.employee = this.editEmployeeForm.value;
    this.employeeServiceService.updateEmployee(this.employee)
      .subscribe(value => this.router.navigateByUrl('employee/list'));
    this.snackBar.open('update ok ' + this.employee.nameEmployee, 'ok');
  }
}
