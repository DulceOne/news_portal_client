import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl,  } from '@angular/forms';
import { HttpService } from '../../service/http.service';
import { EApiUrls } from '../../core/enums/api-urls.enums';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;

  constructor(
      private fb: FormBuilder,
      private http: HttpService
    ) {
    this.signInForm = this.fb.group({
      username : [''],
      password : [''],
    });
   }

  ngOnInit() {
  }
  
  onSubmitForm() {
    const controls = this.signInForm
    const user = {
      username: controls.value.username,
      password: controls.value.password
    }

    this.http.post(EApiUrls.AUTH_SIGNIN, user).subscribe((value: {token: string}) =>{
      localStorage.setItem('token', value.token);
      controls.reset()
    },
    error => {
      // error - объект ошибки
    });

  }
}
