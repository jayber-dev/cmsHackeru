import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/contactService/contact.service';
import { CostumerService } from 'src/app/services/costumersService/cosutmers.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit{
  constructor(
    private costumers:CostumerService,
    private router:Router,
    private contacts:ContactService
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
    if(this.router.url == '/dashboard/costumers/table'){
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

    if(this.router.url == '/dashboard/contacts/table'){
      this.contacts.getContacts(from).subscribe(data => {
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

  }
  
  ngOnInit(): void {
    // this.data = this.serverCall(this.from)
    if(this.router.url == '/dashboard/costumers/table') {
      const retrive = this.costumers.getCostumers(this.from).subscribe(data => {    
        this.data = (data);
        retrive.unsubscribe()
      })
    }

    if(this.router.url == '/dashboard/contacts/table'){
      const retrive = this.contacts.getContacts(this.from).subscribe(data => {  
        // console.log(data);
          
        this.data = data;
        // retrive.unsubscribe()
      })
    }
    
  }  
}
