import { Component,OnInit,OnDestroy } from '@angular/core';
import { AuthService } from './services/authService/auth.service';
import { Router } from '@angular/router';
import { UtilService } from './services/utilService/util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  constructor(
    private util:UtilService,
    private auth:AuthService,
    private router:Router
  ){}
  title = 'cmsFront';
  isLogged:boolean

  
  ngOnInit(): void {
    console.log('in app component');
    this.auth.auth().subscribe(data => {
      // console.log(data);
      // console.log(data['isLogged']);
      if(!data['isLogged']) {
        this.router.navigateByUrl('about')
      }
      if(data['isLogged']) {
        this.util.setLoggedTrue()
        
      }
    })
    this.util.updateIsLogged.subscribe((data) => {
      this.isLogged = data
    })
  }

  ngOnDestroy(): void {
    this.isLogged
  }

  
}
