import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/app/services/contactService/contact.service';
import { CostumerService } from 'src/app/services/costumersService/cosutmers.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  constructor(
    private router: ActivatedRoute,
    private costumers: CostumerService,
    private contacts: ContactService
  ) {}

  data: any;
  costumersData: string[];
  from: number = 0;
  makeCall: boolean = true;
  query: string;
  type:string

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
    this.costumers.searchCostumer(this.query, from).subscribe((data) => {
      this.data = data;

      if (this.data.length != 15) {
        this.makeCall = false;
      } else {
        this.makeCall = true;
      }
    });
  }

  ngOnInit(): void {
    this.router.params.subscribe((param) => {
      this.query = param['query'];
      this.type = (param['type']);
      
      console.log(this.router.url);
      if(this.type == 'costumers'){
        this.costumers.searchCostumer(this.query, this.from).subscribe((data) => {
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
        this.contacts.searchContacts(this.query, this.from).subscribe((data) => {
          this.data = data;
  
          if (this.data.length != 15) {
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
