import { Component, OnInit } from '@angular/core';
import { SocialAuthService, SocialUser } from "@abacritt/angularx-social-login";
import { FacebookLoginProvider } from "@abacritt/angularx-social-login";
import { UtilService } from 'src/app/services/utilService/util.service';
import { httpService } from 'src/app/services/httpService/http.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.scss']
})
export class GoogleLoginComponent implements OnInit{
  
  text = "wow";
  user: SocialUser;
  loggedIn: any;

  constructor(
    private authService: SocialAuthService,
    private util:UtilService,
    private http:httpService,
    private router:Router,
    private cookieService:CookieService
    ) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(this.user);
      
      this.loggedIn = (user != null);
      this.util.setLoggedTrue()
      const http = this.http.post('auth/googleLogin', this.user).subscribe(data =>{
        this.cookieService.set('log',data['t'], {expires:1})
        http.unsubscribe();
      })
      this.router.navigateByUrl('dashboard/costumers/table/0')
    });
  }
}
