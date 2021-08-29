import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  contactForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    country: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required, Validators.min(18)]),
    gender: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')]),
    pswGroup: new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
    }, this.conparePassword)
  });
  countryList = ['VN', 'USA', 'CAD'];

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.contactForm.value);
    console.log(this.contactForm.value.phone);
  }

  conparePassword(c: AbstractControl): any {
    const v = c.value;
    return v.password === v.confirmPassword ? null : {passwordnotmatch: true};
  }
}
