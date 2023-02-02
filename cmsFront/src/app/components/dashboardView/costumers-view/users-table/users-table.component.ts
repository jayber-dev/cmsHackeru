import { Component, OnInit } from '@angular/core';
import { CostumerService } from 'src/app/services/costumersService/cosutmers.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit{
  constructor(
    private costumers:CostumerService
  ){}
  data:any
  costumersData:string[]
  from:number = 0 
  
    // TODO:fix the perv next btn
  perv(){
    if(this.from >= 0){
      
      console.log(this.from);
      this.serverCall()
      this.from = this.from - 15
    } 
  }
  next(){  
    if(this.from < this.data['rowCount']['countNumber']){
      this.from = this.from + 15
      this.serverCall()
      
    console.log(this.from);
    
    }
    
  }

  serverCall(){
    console.log(this.from);
    
    this.data = []
    this.costumers.getCostumers(this.from).subscribe(data => {
      console.log(data);
      
      this.data = data
      console.log(this.data['rowCount']);
      
    })
  }
  
  ngOnInit(): void {
    this.serverCall()
  }
}
