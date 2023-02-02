import { Component, Input, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/utilService/util.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent  {
  constructor(
    private util:UtilService
  ){

  }
  
}
