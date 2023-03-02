import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { count } from 'rxjs';
import { httpService } from 'src/app/services/httpService/http.service';

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.scss']
})
export class UsersConnectionsComponent implements OnChanges {
  constructor(
    private router: Router,
    private activatedRoute:ActivatedRoute,
    private http:httpService,
    private cookieService:CookieService,
  ) {}

  data: any;
  makeCall: boolean = true;
  param:string
  showBy = new Set<string>()

  @Input() someData
    
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

  ngOnChanges(changes: SimpleChanges): void {
    this.activatedRoute.params.subscribe(param => {
      this.param = param['showBy']
    })    
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      this.param = param['showBy']
    })

    if (this.router.url.match('costumers')) {
      const retrive = this.http.get(`costumers/getAll`,{t:this.cookieService.get('log')}).subscribe((data) => {
          this.data = data;

          for(let i of this.data) {
            this.showBy.add(i.country);  
          }          
          retrive.unsubscribe();
        });
    }

    if (this.router.url.match('contacts')) {
      const retrive = this.http.get(`contacts/getAll`,{t:this.cookieService.get('log')}).subscribe((data) => {
        this.data = data;
        for(let i of this.data) {
          this.showBy.add(i.country);  
        }
        retrive.unsubscribe();
      });
    }
  }
}
