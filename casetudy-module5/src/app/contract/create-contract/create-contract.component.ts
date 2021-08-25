import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css']
})
export class CreateContractComponent implements OnInit {
  createContractForm = new FormGroup({
    idContract: new FormControl('', Validators.required),
    idEmployee: new FormControl('', Validators.required),
    idCustomer: new FormControl('', Validators.required),
    idService: new FormControl('', Validators.required),
    dateStart: new FormControl('', Validators.required),
    dateEnd: new FormControl('', Validators.required),
    deposit: new FormControl('', Validators.required),
    totalMoney: new FormControl('', Validators.required)
  });
  employeeList = [];
  customerList = [];
  serviceList = [];

  constructor() {
    this.employeeList.push({
      idEmployee: 333, nameEmployee: 'Dung van Binh', idPosition: 2,
      idEducation: 1, idDivision: 2, dateOfBirthEmployee: '2000-11-11', idCardEmployee: '123321222',
      salaryEmployee: 333222, phoneEmployee: '0935123123',
      emailEmployee: 'kkk@gmail.com', addressEmployee: 'Da Lat', codeEmployee: 'NV-123'
    });
    this.customerList.push({
      customerId: 222, typeCustomerId: 1, nameCustomer: 'Nguyen Van Tung',
      dateOfBirthCustomer: '2000-12-12', idCardCustomer: '234456123', phoneCustomer: '0935123123',
      emailCustomer: 'kkk@gmail.com', addressCustomer: 'Da nang', codeCustomer: 221
    });
    this.customerList.push({
      customerId: 222, typeCustomerId: 1, nameCustomer: 'Nguyen Van Dung',
      dateOfBirthCustomer: '2000-12-12', idCardCustomer: '234456123', phoneCustomer: '0935123123',
      emailCustomer: 'kkk@gmail.com', addressCustomer: 'Da nang', codeCustomer: 221
    });
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
    this.serviceList.push({
      idService: 123,
      nameService: 'vip House',
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

  onSubmit() {
    console.log(this.createContractForm.value);
  }
}
