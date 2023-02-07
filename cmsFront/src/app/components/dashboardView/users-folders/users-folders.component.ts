import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/contactService/contact.service';
import { CostumerService } from 'src/app/services/costumersService/cosutmers.service';

@Component({
  selector: 'app-users-folders',
  templateUrl: './users-folders.component.html',
  styleUrls: ['./users-folders.component.scss'],
})
export class UsersFoldersComponent implements OnInit {
  constructor(
    private router: Router,
    private costumers: CostumerService,
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
    if (this.router.url == '/dashboard/costumers/folders') {
      this.costumers.getCostumers(from).subscribe((data) => {
        this.data = data;

        if (this.data.length != 15) {
          this.makeCall = false;
        } else {
          this.makeCall = true;
        }
      });
    }

    if (this.router.url == '/dashboard/contacts/folders') {
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
    console.log(id);
    console.log(index)
    if(confirm('are you sure you want to delete ?')){
      if (this.router.url == '/dashboard/costumers/folders') {
        const deleteUser = this.costumers.deleteCostumer(id).subscribe(() => {
          deleteUser.unsubscribe()
          delete this.data[index]
        })
      }
  
      if (this.router.url == '/dashboard/contacts/folders') {
        const deleteUser = this.costumers.deleteCostumer(id).subscribe(() => {
          deleteUser.unsubscribe()
        })
      }
    } 
  }

  ngOnInit(): void {
    // this.data = this.serverCall(this.from)

    if (this.router.url == '/dashboard/costumers/folders') {
      const retrive = this.costumers
        .getCostumers(this.from)
        .subscribe((data) => {
          this.data = data;
          retrive.unsubscribe();
        });
    }

    if (this.router.url == '/dashboard/contacts/folders') {
      const retrive = this.contacts.getContacts(this.from).subscribe((data) => {
        this.data = data;
        retrive.unsubscribe();
      });
    }
  }
}
