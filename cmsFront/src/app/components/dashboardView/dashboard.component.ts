import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/utilService/util.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  constructor(
    private util:UtilService
  ){}

  isLogged:boolean
  ngOnInit(): void {
    this.util.updateIsLogged.subscribe(data => {     
      this.isLogged = data
    })
  }
}
