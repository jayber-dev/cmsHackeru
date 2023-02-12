import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private contacts: ContactService,
    private activatedRoute: ActivatedRoute
  ) {}
  data: any;
  costumersData: string[];
  from: number;
  makeCall: boolean = true;
  param: number;

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
      this.router.navigateByUrl(`/dashboard/costumers/table/${this.from}`);
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

    if (this.router.url.match('contacts')) {
      this.router.navigateByUrl(`/dashboard/contacts/table/${this.from}`);
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

  deleteRegistry(id, index) {
    if (confirm('are you sure you want to delete ?')) {
      if (this.router.url.match('costumers')) {
        const deleteUser = this.costumers.deleteCostumer(id).subscribe(() => {
          deleteUser.unsubscribe();
        });
      }

      if (this.router.url.match('contacts')) {
        console.log('in contacts delete');

        const deleteUser = this.contacts.deleteContact(id).subscribe(() => {
          delete this.data[index];
          deleteUser.unsubscribe();
        });
      }
    }
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      console.log(param);
      this.from = Number(param['from']);
      this.param = param['from'];
    });

    if (this.router.url.match('costumers')) {
      const retrive = this.costumers
        .getCostumers(this.param)
        .subscribe((data) => {
          this.data = data;
          retrive.unsubscribe();
        });
    }

    if (this.router.url.match('contacts')) {
      const retrive = this.contacts
        .getContacts(this.param)
        .subscribe((data) => {
          console.log(data);

          this.data = data;
          retrive.unsubscribe();
        });
    }
  }
}
