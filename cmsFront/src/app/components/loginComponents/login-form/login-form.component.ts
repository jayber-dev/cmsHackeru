import { Component } from '@angular/core';
import { FormControl, FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authService/auth.service';
import { UtilService } from 'src/app/services/utilService/util.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  constructor(
    private fb:FormBuilder,
    private util:UtilService,
    private auth:AuthService,
    private router:Router,
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
    const login = this.auth.login(this.loginForm.get('email').value,this.loginForm.get('password').value).subscribe(data => {
      console.log(data['isLogged']);
      if(data['isLogged']){
        this.util.setLoggedTrue()
        this.router.navigateByUrl('/')
      } else {
        console.log('poop on you from login');
        
      }
      login.unsubscribe()
    })

  }
}
