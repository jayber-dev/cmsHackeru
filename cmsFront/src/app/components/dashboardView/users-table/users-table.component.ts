import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { httpService } from 'src/app/services/httpService/http.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private http:httpService,
    private cookieService:CookieService
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
      const retrive = this.http.get('costumers/',from).subscribe((data) => {
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
      this.http.get('contacts/',from).subscribe((data) => {
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
        const deleteUser = this.http.delete(`costumers/deleteCostumer/${id}`).subscribe(() => {
          deleteUser.unsubscribe();
        });
      }

      if (this.router.url.match('contacts')) {
        const deleteUser = this.http.delete(`contacts/deleteContact/${id}`).subscribe(() => {
          delete this.data[index];
          deleteUser.unsubscribe();
        });
      }
    }
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.from = Number(param['from']);
      this.param = param['from'];
    });

    if (this.router.url.match('costumers')) {
      const retrive = this.http.get('costumers/',{from:this.param,t:this.cookieService.get('log')}).subscribe((data) => {
        this.data = data;
        retrive.unsubscribe();
        });
    }

    if (this.router.url.match('contacts')) {
      const retrive = this.http.get('contacts',{from:this.param,t:this.cookieService.get('log')}).subscribe((data) => {
          this.data = data;
          retrive.unsubscribe();
        });
    }
  }
}
