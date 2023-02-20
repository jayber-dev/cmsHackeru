import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/services/utilService/util.service';
import { passwordsMatch } from 'src/app/directives/passwordMatch.directive';
import { httpService } from 'src/app/services/httpService/http.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent {
  constructor(
    private fb: FormBuilder,
   
    private util: UtilService,
    private router:Router,
    private http: httpService,
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
    const http = this.http.post('auth/signup',this.signupForm.value).subscribe(data => {
      this.message = data['message']
      if(this.message == 'registered'){
        this.util.setLoggedTrue()
        this.router.navigateByUrl('dashboard/costumers/table/0')
      }
    })
    

  }
}
