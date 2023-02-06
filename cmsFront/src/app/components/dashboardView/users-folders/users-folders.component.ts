import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CostumerService } from 'src/app/services/costumersService/cosutmers.service';

@Component({
  selector: 'app-users-folders',
  templateUrl: './users-folders.component.html',
  styleUrls: ['./users-folders.component.scss']
})
export class UsersFoldersComponent implements OnInit{
  constructor(
    private router:Router,
    private costumers:CostumerService
  ){}

  data:any
  costumersData:string[]
  from:number = 0
  makeCall:boolean = true

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
    console.log(this.router.routerState.snapshot.url)
    const retrive = this.costumers.getCostumers(this.from).subscribe(data => {    
      this.data = (data);
      retrive.unsubscribe()
    })
  }
  
}
