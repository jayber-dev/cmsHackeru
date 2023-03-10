import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component,Input,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { httpService } from 'src/app/services/httpService/http.service';
import { UtilService } from 'src/app/services/utilService/util.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  constructor(
    private util:UtilService,
    private router:Router,
    private http:httpService,
    private authService:SocialAuthService,
    private cookieService:CookieService
    ){
    
  }
  isLogged:boolean
  

  logout(){
    const logOut = this.http.post('auth/logout',{'t':this.cookieService.get('log')}).subscribe(data =>{
      console.log(data);
      this.cookieService.delete('log')
      this.util.setLoggedFalse()
      this.router.navigateByUrl('about')

      logOut.unsubscribe()
    })
    this.authService.signOut().then(data => {
      this.util.setLoggedFalse()
      this.router.navigateByUrl('about')
    });
    this.util.setLoggedFalse()
    this.router.navigateByUrl('about')
    
  }

  ngOnInit(): void {   
    
    this.util.updateIsLogged.subscribe((data) => {
      this.isLogged = data
    })
  }
}
