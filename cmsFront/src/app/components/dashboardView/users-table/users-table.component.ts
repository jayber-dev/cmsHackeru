import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/contactService/contact.service';
import { CostumerService } from 'src/app/services/costumersService/cosutmers.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent implements OnInit {
  constructor(
    private costumers: CostumerService,
    private router: Router,
    private contacts: ContactService
  ) {}
  data: any;
  costumersData: string[];
  from: number = 0;
  makeCall: boolean = true;

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
    if (this.router.url == '/dashboard/costumers/table') {
      const retrive = this.costumers.getCostumers(from).subscribe((data) => {
        this.data = data;
        if (this.data.length != 15) {
          this.makeCall = false;
        } else {
          this.makeCall = true;
        }
        retrive.unsubscribe();
      });
    }

    if (this.router.url == '/dashboard/contacts/table') {
      this.contacts.getContacts(from).subscribe((data) => {
        this.data = data;

        if (this.data.length != 15) {
          this.makeCall = false;
        } else {
          this.makeCall = true;
        }
      });
    }
  }

  deleteRegistry(id,index){
    if(confirm('are you sure you want to delete ?')){
      if (this.router.url.match('costumers')) {
        const deleteUser = this.costumers.deleteCostumer(id).subscribe(() => {
          deleteUser.unsubscribe()
          
        })
      }
  
      if (this.router.url.match('contacts')) {
        console.log('in contacts delete');
        
        const deleteUser = this.contacts.deleteContact(id).subscribe(() => {
          delete this.data[index]
          deleteUser.unsubscribe()
        })
      }
    } 
  }

  ngOnInit(): void {
    // this.data = this.serverCall(this.from)
    if (this.router.url == '/dashboard/costumers/table') {
      const retrive = this.costumers
        .getCostumers(this.from)
        .subscribe((data) => {
          this.data = data;
          retrive.unsubscribe();
        });
    }

    if (this.router.url == '/dashboard/contacts/table') {
      const retrive = this.contacts.getContacts(this.from).subscribe((data) => {
        this.data = data;
        retrive.unsubscribe();
      });
    }
  }
}
