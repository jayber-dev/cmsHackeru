import { Component,OnInit,OnDestroy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from './services/utilService/util.service';
import { httpService } from './services/httpService/http.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private util:UtilService,
    private cookieService:CookieService
    private router:Router,
    private http:httpService,
  ){}
  title = 'CMS-HackerU';
  @Input() isLogged:boolean
  
  ngOnInit(): void {
  
    
    this.http.post('auth/auth',{t:this.cookieService.get('log')}).subscribe(data => {
      if(!data['isLogged']) {
        this.router.navigateByUrl('about')
      }
      if(data['isLogged']) {
        this.util.setLoggedTrue()
        this.router.navigateByUrl('dashboard/costumers')
      }
      
    })
  }

  // ngOnDestroy(): void {
  //   this.isLogged
  // }

  
}
