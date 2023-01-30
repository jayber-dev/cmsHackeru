import { Component } from '@angular/core';
import { FormControl, FormGroup,FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/services/loginService/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  constructor(
    private fb:FormBuilder,
    private login:LoginService
    ) {
    this.loginForm = fb.group({
      email:[''],
      password:[''],
    })
  }

  loginForm: FormGroup;
  
  googleLogin(){
    console.log('will be logged with google');
  }

  onSubmit(){
    console.log(this.loginForm.get('email').value);
    console.log(this.loginForm.get('password').value);
    const login = this.login.login(this.loginForm.get('email').value,this.loginForm.get('password').value).subscribe(data => {
      console.log(data);

      login.unsubscribe()
    })

  }
}
