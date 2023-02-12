import { Component,Input,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authService/auth.service';
import { UtilService } from 'src/app/services/utilService/util.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() isLogged:boolean
  constructor(
    private auth:AuthService,
    private util:UtilService,
    private router:Router,
    ){
    
  }
  
  

  logout(){
    console.log('logout');
    this.auth.logout().subscribe()
    this.util.setLoggedFalse()
    this.router.navigateByUrl('login')
  }

  ngOnInit(): void {
    
    this.util.updateIsLogged.subscribe((data) => {
      this.isLogged = data
    }
    )
  }
}
