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
    private cookieService:CookieService,
    private router:Router,
    private http:httpService,
  ){}
  title = 'CMS-HackerU';
  dataRecive:boolean = false
  @Input() isLogged:boolean
  
  ngOnInit(): void {
  
    if(this.cookieService.get('log')){
      this.http.post('auth/auth',{}).subscribe(data => {
        if(data['isLogged']) {
          this.dataRecive = true
          this.util.setLoggedTrue()
          this.router.navigateByUrl('dashboard/costumers')
        } else {
          this.dataRecive = true
          this.router.navigateByUrl('about')
        }
        
      })
    } else {
      this.dataRecive = true
      this.router.navigateByUrl('about')
    }
    
  }

  // ngOnDestroy(): void {
  //   this.isLogged
  // }

  
}
