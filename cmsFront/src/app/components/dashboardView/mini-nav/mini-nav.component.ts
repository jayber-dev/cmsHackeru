import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mini-nav',
  templateUrl: './mini-nav.component.html',
  styleUrls: ['./mini-nav.component.scss']
})
export class MiniNavComponent implements OnInit{
  constructor(
    private router:Router
  ){}
  category:string = 'Costumer'
  show:boolean

  openModal(e){ 
    this.show = !this.show  
  }

  ngOnInit(): void {
    if(this.router.url.match('costumer')){
      this.category = 'Costumer'
    }

    if(this.router.url.match('contacts')){
      this.category = 'Contact'
    }
  }
}
