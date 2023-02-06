import { query } from '@angular/animations';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CostumerService } from 'src/app/services/costumersService/cosutmers.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent  implements OnInit, OnChanges{
  constructor(
    private router:ActivatedRoute,
    private costumers:CostumerService
  ){}

  data:any
  costumersData:string[]
  from:number = 0
  makeCall:boolean = true
  param:string

  perv(){
    if(this.from > 0){
      
      console.log(this.from);
      this.from = this.from - 15
      this.serverCall(this.from)
      
    } 
  }
  next(){  
    if(this.makeCall){
    this.from = this.from + 15
    this.serverCall(this.from)
    }
    // console.log(this.from);  
  }

  serverCall(from){
    console.log(from);
    this.costumers.searchCostumer(this.param,from).subscribe(data => {
      console.log(data);
      this.data = data
      console.log(this.data.length);
      
      if(this.data.length != 15){
        this.makeCall = false
      } else {
        this.makeCall = true
      }
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log('in on change');
  }

  ngOnInit():void {
    console.log('im on init');
    this.router.params.subscribe(param => {
      console.log(param);
      this.param = param['query'];  
      this.costumers.searchCostumer(this.param,this.from).subscribe(data=>{
        console.log(data);
        this.data = data

        if(this.data.length != 15){
          this.makeCall = false
        } else {
          this.makeCall = true
        }
      })
    })

    
  }
}

// TODO: fix the search Results