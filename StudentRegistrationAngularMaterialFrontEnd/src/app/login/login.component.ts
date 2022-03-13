import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  //Constructor
  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router) {}

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;

      console.log('--------'+this.f.username.value);
      console.log('--------'+this.f.password.value);
      
      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }

      this.loading = true;

      console.log(this.f.username.value);
      console.log(this.f.password.value);             
  }   
}