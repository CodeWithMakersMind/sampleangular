import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApilatestService } from '../apilatest.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
})
export class RegistrationComponent {
  constructor(private form: FormBuilder, private service: ApilatestService) {}

  Submit = this.form.group({
    name: [
      '',
      Validators.required,
      Validators.pattern,
      Validators.maxLength(5),
    ],
    phonenumber: ['', Validators.required],
    Email: ['', Validators.required],
    city: ['', Validators.required],
    street: ['', Validators.required],
    message: ['', Validators.required],
  });
  get registerError() {
    return this.Submit.controls;
  }

  formSubmit() {
    if (this.Submit.valid) {
      console.log(this.Submit.value);
      // return;
      this.service
        .postregistration(this.Submit.value)
        .subscribe((result: any) => {
          if (result?.status) {
            alert('success');
            this.Submit.reset();
          } else {
            alert('failed');
          }
        });
    } else {
      alert('form not valid');
    }
  }
}
