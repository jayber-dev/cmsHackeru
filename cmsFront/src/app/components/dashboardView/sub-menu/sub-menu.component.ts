import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss']
})
export class SubMenuComponent implements OnInit {
  constructor(
    private router:Router
  ){}
  val:string = 'first_name'
  category:string
  query:string

  search(e){
    console.log(this.val);
    if (this.router.url.match('costumers')) {
      this.router.navigateByUrl(`dashboard/costumers/searchResults/0/costumers/${this.query}/${this.val}`)
    }

    if (this.router.url.match('contacts')){
      this.router.navigateByUrl(`dashboard/costumers/searchResults/0/contacts/${this.query}/${this.val}`)
    }
    // console.log(this.router.url)
  }

  ngOnInit(): void {
    if(this.router.url.match('contacts')){
      this.category = 'contacts'
    }   
    if(this.router.url.match('costumers')){
      this.category = 'costumers'
    }   
  }
}
