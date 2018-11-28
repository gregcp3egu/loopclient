

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loading: boolean;

  constructor(private fb: FormBuilder, private as: AuthService, private router: Router) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  login(){
    this.loading = true;
    this.as.emailLogin(this.form.value.email, this.form.value.password).then(
      d => {
        this.form.reset();
        this.router.navigate(['/']);
        this.loading = false;
      }
    ).catch(
      e => {
        console.log(e);
        this.loading = false;
      }
    )
  }

}
