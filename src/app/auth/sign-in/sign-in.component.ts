import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl,  } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signInForm = this.fb.group({
      email :  [''],
      password : [''],
    });
   }

  ngOnInit() {
  }

  
  onSubmitForm() {
    const controls = this.signInForm
    const email = controls.value.email
    console.log(email)
  }
}
