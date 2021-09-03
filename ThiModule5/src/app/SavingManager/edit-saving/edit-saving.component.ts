import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../customer';
import {Saving} from '../saving';
import {SavingService} from '../saving.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-saving',
  templateUrl: './edit-saving.component.html',
  styleUrls: ['./edit-saving.component.css']
})
export class EditSavingComponent implements OnInit {
  saving: Saving;
  id: number;
  editSavingForm = new FormGroup({
    id: new FormControl('', Validators.required),
    customer: new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]),
      id: new FormControl('', Validators.required),
      code: new FormControl('', Validators.required)
    }),
    date: new FormGroup({
      id: new FormControl(''),
      dateOpen: new FormControl('', Validators.required),
      dateStart: new FormControl('', [Validators.required, this.validateDateFuture]),
    }, this.validateDateBeforeOpenDate),
    period: new FormControl('', Validators.required),
    deposit: new FormControl('', [Validators.required, Validators.min(10000000)]),
    rate: new FormControl('', Validators.required),
    offer: new FormControl('', Validators.required),

  });

  // customerList: Customer[];

  constructor(private savingService: SavingService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private snackBar: MatSnackBar) {
    this.id = Number(activatedRoute.snapshot.params.id);
  }

  ngOnInit(): void {
    // this.savingService.findAllCustomer().subscribe(value => this.customerList = value);
    this.savingService.findById(this.id).subscribe(
      value => this.editSavingForm.setValue(value));
  }

  onSubmitUpdate() {
    this.saving = this.editSavingForm.value;
    this.savingService.updateSaving(this.saving)
      .subscribe(value => {
        this.router.navigateByUrl('saving/list');
        this.snackBar.open('update ok ', 'ok');
      }, error => this.snackBar.open('update error ', 'ok'));
  }

  validateDateFuture(date: AbstractControl): any {
    if (new Date(date.value) < new Date()) {
      return {invalidDate: true};
    }
    return null;
  }

  validateDateBeforeOpenDate(date: AbstractControl): any {
    if (new Date(date.value.dateStart) < new Date(date.value.dateOpen)) {
      return {invalidDate: true};
    }
    return null;
  }
}
