import { Component, OnInit, ViewChild } from '@angular/core';

import {Router} from '@angular/router';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required
   
  ]);

  matcher = new MyErrorStateMatcher();
  constructor(public router:Router) { }

  onSubmit()
  {
    console.log(this.emailFormControl.value +''+ this.passwordFormControl.value);
    localStorage.setItem('loggedIn','true');
    this.router.navigateByUrl('/dashboard');
  }
  ngOnInit() {
  }

}
