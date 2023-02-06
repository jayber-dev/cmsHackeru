import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mini-nav',
  templateUrl: './mini-nav.component.html',
  styleUrls: ['./mini-nav.component.scss']
})
export class MiniNavComponent {

  show:boolean
  openModal(e){ 
    this.show = !this.show  
  }
}
