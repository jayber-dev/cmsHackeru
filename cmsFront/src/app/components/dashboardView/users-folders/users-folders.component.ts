import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { httpService } from 'src/app/services/httpService/http.service';

@Component({
  selector: 'app-users-folders',
  templateUrl: './users-folders.component.html',
  styleUrls: ['./users-folders.component.scss'],
})
export class UsersFoldersComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute:ActivatedRoute,
    private http:httpService
  ) {}

  data: any;
  costumersData: string[];
  from: number = 0;
  makeCall: boolean = true;
  param:number
  perv() {
    console.log('in perv');
    if (this.from > 0) {
      this.from = this.from - 15;
      this.serverCall(this.from);
    }
  }
  next() {
    console.log('in next');
    if (this.makeCall) {
      this.from = this.from + 15;
      this.serverCall(this.from);
    }
  }

  serverCall(from) {
    if (this.router.url.match('costumers')) {
      this.router.navigateByUrl(`/dashboard/costumers/folders/${this.from}`)
      this.http.get('costumers/', from).subscribe((data) => {
        this.data = data;

        if (this.data.length != 15) {
          this.makeCall = false;
        } else {
          this.makeCall = true;
        }
      });
    }

    if (this.router.url.match('contacts')) {
      this.http.get('contacts/', from).subscribe((data) => {
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
        const deleteUser = this.http.delete(`costumers/deleteCostumer/${id}`).subscribe(() => {
          deleteUser.unsubscribe()
          delete this.data[index]
        })
      }
  
      if (this.router.url.match('contacts')) {
        const deleteUser = this.http.delete(`contacts/deleteContact/${id}`).subscribe(() => {
          deleteUser.unsubscribe()
        })
      }
    } 
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      this.from = Number(param['from'])
      this.param = param['from']
    })

    if (this.router.url.match('costumers')) {
      console.log(this.param);
      const retrive = this.http.get('costumers/',this.param).subscribe((data) => {
          this.data = data;
          retrive.unsubscribe();
        });
    }

    if (this.router.url.match('contacts')) {
      const retrive = this.http.get('contacts/',this.param).subscribe((data) => {
        this.data = data;
        retrive.unsubscribe();
      });
    }
  }
}
