import { Component,OnInit } from '@angular/core';
import { AuthService } from './services/authService/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(
    private auth:AuthService,
    private router:Router
  ){}
  title = 'cmsFront';

  ngOnInit(): void {
    this.auth.auth().subscribe(data => {
      console.log(data);
      console.log(data['logged']);
      if(data['isLogged'] == false) {
        this.router.navigateByUrl('/login')
      }
    })
  }
}
