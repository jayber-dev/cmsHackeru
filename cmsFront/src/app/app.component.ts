import { Component,OnInit,OnDestroy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from './services/utilService/util.service';
import { httpService } from './services/httpService/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  constructor(
    private util:UtilService,
    
    private router:Router,
    private http:httpService,
  ){}
  title = 'CRM-HackerU';
  @Input() isLogged:boolean

  
  ngOnInit(): void {
  
    
    this.http.post('auth/auth',{}).subscribe(data => {
      if(!data['isLogged']) {
        this.router.navigateByUrl('about')
      }
      if(data['isLogged']) {
        this.util.setLoggedTrue()
        this.router.navigateByUrl('dashboard/costumers')
      }
    })
  }

  ngOnDestroy(): void {
    this.isLogged
  }

  
}
