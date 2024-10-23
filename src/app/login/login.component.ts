import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApilatestService } from '../apilatest.service';
import { subscribe } from 'diagnostics_channel';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { Router } from 'express';
import { jwtDecode } from 'jwt-decode';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    private form: FormBuilder,
    private service: ApilatestService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  loginForm: any = this.form.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  get loginerror() {
    return this.loginForm.controls;
  }
  decoded: any;
  loginform() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.service.postlogin(this.loginForm.value).subscribe((result: any) => {
        if (result?.status) {
          this.loginForm.reset();

          localStorage.setItem('Token', result?.jwtToken);
          this.decoded = jwtDecode(result?.jwtToken);
          localStorage.setItem('customerID', this.decoded.userid);
        } else {
          Swal.fire({
            title: 'Error!',
            text: 'Failed to login',
            icon: 'error',
            confirmButtonText: 'ok',
          });
        }
      });
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Failed ',
        icon: 'error',
        confirmButtonText: 'ok',
      });
    }
  }
}
