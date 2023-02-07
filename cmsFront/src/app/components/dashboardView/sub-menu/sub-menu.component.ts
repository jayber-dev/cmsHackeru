import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss']
})
export class SubMenuComponent {
  constructor(
    private router:Router
  ){}
  search(e){
    
    this.router.navigateByUrl(`dashboard/costumers/searchResults/${e.target.value}`)
  }
}
