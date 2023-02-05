import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CostumerService } from 'src/app/services/costumersService/cosutmers.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit, OnChanges{
  constructor(
    private costumers:CostumerService
  ){}
  data:any
  costumersData:string[]
  from:number = 0
  makeCall:boolean = true
    // TODO:fix the perv next btn
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

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  serverCall(from){
    console.log(from);
    this.costumers.getCostumers(from).subscribe(data => {
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
  
  ngOnInit(): void {
    // this.data = this.serverCall(this.from)
    const retrive = this.costumers.getCostumers(this.from).subscribe(data => {    
      this.data = (data);
      console.log(this.data);
      
      retrive.unsubscribe()
    })
  }
    
      
}
