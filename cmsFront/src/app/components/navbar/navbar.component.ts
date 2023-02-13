import { Component,Input,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { httpService } from 'src/app/services/httpService/http.service';
import { UtilService } from 'src/app/services/utilService/util.service';

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
    ){
    
  }
  @Input() isLogged:boolean
  

  logout(){
    console.log('logout');
    this.http.post('auth/logout',{}).subscribe()
    this.util.setLoggedFalse()
    this.router.navigateByUrl('login')
  }

  ngOnInit(): void {
    // console.log(this.util.getIsLogged());
    
    this.util.updateIsLogged.subscribe((data) => {
      this.isLogged = data
    })
  }
}
