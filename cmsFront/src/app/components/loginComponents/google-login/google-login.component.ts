import { Component, OnInit } from '@angular/core';
import { SocialAuthService, SocialUser } from "@abacritt/angularx-social-login";
import { FacebookLoginProvider } from "@abacritt/angularx-social-login";
import { UtilService } from 'src/app/services/utilService/util.service';
import { httpService } from 'src/app/services/httpService/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.scss']
})
export class GoogleLoginComponent implements OnInit{
  

  user: SocialUser;
  loggedIn: any;

  constructor(
    private authService: SocialAuthService,
    private util:UtilService,
    private http:httpService,
    private router:Router
    ) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      this.util.setLoggedTrue()
      const http = this.http.post('auth/googleLogin', this.user).subscribe(data =>{
        console.log(data);
        http.unsubscribe();
      })
      this.router.navigateByUrl('dashboard/costumers/table/0')
      console.log(this.user);
    });
  }
}
