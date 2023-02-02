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
  

  perv(){
    if(this.from > 0){
      this.from = this.from - 20
      console.log(this.from);
      this.serverCall()
    } 
  }
  next(){  
    if(this.from < this.data['rowCount']['countNumber']){
      this.from = this.from + 20
    console.log(this.from);
    this.serverCall()
    }
    
  }

  serverCall(){
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
