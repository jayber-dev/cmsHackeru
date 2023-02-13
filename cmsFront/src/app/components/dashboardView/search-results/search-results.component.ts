import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { httpService } from 'src/app/services/httpService/http.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private http: httpService,
  ) {}

  data: any;
  costumersData: string[];
  from: number = 0;
  makeCall: boolean = true;
  query: string;
  type:string
  searchParam:string

  perv() {
    if (this.from > 0) {
      this.from = this.from - 15;
      this.serverCall(this.from);
    }
  }
  next() {
    if (this.makeCall) {
      this.from = this.from + 15;
      this.serverCall(this.from);
    }
  }

  serverCall(from) {
    
    if (this.router.url.match('costumers')) {
      this.router.navigateByUrl(`dashboard/costumers/searchResults/${from}/costumers/${this.query}`)
    }

    if (this.router.url.match('contacts')) {
      this.router.navigateByUrl(`dashboard/contacts/searchResults/${from}/contacts/${this.query}`)
    }
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.query = param['query'];
      this.type = param['type'];
      this.searchParam = param['value']
      console.log(param);
      
      if(this.type == 'costumers'){
        this.http.get(`costumers/search/${this.query}/${this.searchParam}`,this.from).subscribe((data) => {
          this.data = data;
  
          if (this.data.length != 15) {
            this.makeCall = false;
          } else {
            this.makeCall = true;
          }
        });
      }

      if(this.type == 'contacts'){
        console.log('contacts search');
        this.http.get(`contacts/search/${this.query}/${this.searchParam}`,this.from).subscribe((data) => {
          this.data = data;
  
          if (this.data.length < 15) {
            this.makeCall = false;
          } else {
            this.makeCall = true;
          }
        });
      }  
    });
  }
}

// TODO: fix the search Results
