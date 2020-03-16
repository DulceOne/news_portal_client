import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl,  } from '@angular/forms';
import { HttpService } from '../../service/http.service';
import { EApiUrls } from '../../core/enums/api-urls.enums';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  file: File = null;

  constructor(private fb: FormBuilder,
              private http: HttpService) {
    this.signUpForm = this.fb.group({
      username :  [''],
      email :  [''],
      password : [''],
      retype_password : [''],
    });
   }

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
    this.file = files.item(0);
  }

  onSubmitForm() {
    const controls = this.signUpForm.value
    var data = new FormData();
    data.append('avatar', "")//this.file
    data.append('username', controls.username)
    data.append('email', controls.email)
    data.append('password', controls.password)

    this.http.post(EApiUrls.AUTH_SIGNUP,data).subscribe(value =>{
      console.log(value) 

    },
    error => {
      // error - объект ошибки
    });
  }
}
