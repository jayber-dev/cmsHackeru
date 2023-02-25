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
  
  text = "wow";
  user: SocialUser;
  loggedIn: any;

  constructor(
    private authService: SocialAuthService,
    private util:UtilService,
    private http:httpService,
    private router:Router
    ) { }

  ngOnInit() {
<<<<<<< HEAD
    // this.authService.authState.subscribe((user) => {
    //   this.user = user;
    //   this.loggedIn = (user != null);
    //   this.util.setLoggedTrue()
    //   const http = this.http.post('auth/googleLogin', this.user).subscribe(data =>{
    //     http.unsubscribe();
    //   })
    //   this.router.navigateByUrl('dashboard/costumers/table/0')
    // });
=======
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      this.util.setLoggedTrue()
      const http = this.http.post('auth/googleLogin', this.user).subscribe(data =>{
        http.unsubscribe();
      })
      this.router.navigateByUrl('dashboard/costumers/table/0')
    });
>>>>>>> c41ae346e1340012a6d270c0a2f2dc84efd33067
  }
}
