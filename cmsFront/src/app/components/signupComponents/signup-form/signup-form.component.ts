import { Component } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { AuthService } from 'src/app/services/authService/auth.service';
import { UtilService } from 'src/app/services/utilService/util.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent {
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private util: UtilService
    ){
    this.signupForm = fb.group({
      email:[""],
      password:[""],
      repeatedPassword:[""],
    })
  }

  signupForm:FormGroup

  onSubmit(){
    console.log('in signup');
    this.auth.register(this.signupForm.get('email').value,this.signupForm.get('password').value).subscribe(data => {
      console.log(data);
      this.util.setLoggedTrue()
    })
  }
}
