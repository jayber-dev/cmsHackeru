import { Component } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { signupService } from 'src/app/services/registerService/signup.service';
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent {
  constructor(
    private fb: FormBuilder,
    private signup: signupService,
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
    this.signup.register(this.signupForm.get('email').value,this.signupForm.get('password').value).subscribe(data => {
      console.log(data);
    })
  }
}
