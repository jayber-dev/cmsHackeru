import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent  implements OnInit{
  constructor(
    private router:ActivatedRoute
  ){}

  ngOnInit():void {
    this.router.params.subscribe(param => {
      console.log(param);
      
    })
  }
}
