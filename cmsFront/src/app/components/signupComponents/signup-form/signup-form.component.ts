import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authService/auth.service';
import { UtilService } from 'src/app/services/utilService/util.service';
import { passwordsMatch } from 'src/app/directives/passwordMatch.directive';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent {
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private util: UtilService,
    private router:Router,
    ){
    this.signupForm = fb.group({
      email:["",Validators.required],
      password:["",Validators.required],
      repeatedPassword:["",Validators.required],
    },{validators:passwordsMatch})
    
  }

  signupForm:FormGroup
  message:string

  onSubmit(){
    console.log('in signup');
    const http = this.auth.register(this.signupForm.value).subscribe(data => {
      console.log(data);
      this.message = data['message']
      if(this.message == 'registered'){
        this.util.setLoggedTrue()
        this.router.navigateByUrl('dashboard/costumers/table/0')
      }
    })
    

  }
}
