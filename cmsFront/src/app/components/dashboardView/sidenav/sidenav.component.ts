import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/services/utilService/util.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  constructor(
    private util:UtilService,
    private router:Router
  ){}

  category:string = 'Costumer'
  
  setCategory(e){
    console.log(e);
    this.category = e.target.innerHTML.slice(0,e.target.innerHTML.length - 1)

  }

}
