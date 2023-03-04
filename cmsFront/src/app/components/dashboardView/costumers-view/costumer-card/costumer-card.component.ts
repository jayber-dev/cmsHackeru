import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { httpService } from 'src/app/services/httpService/http.service';

@Component({
  selector: 'app-costumer-card',
  templateUrl: './costumer-card.component.html',
  styleUrls: ['./costumer-card.component.scss']
})
export class CostumerCardComponent implements OnInit{
  constructor(
    private http:httpService,
    private route:ActivatedRoute
  ){}
  from:number
  param:string
  costumerData:any
  ngOnInit(): void {
    this.route.params.subscribe(param =>{      
      this.param = (param['id']);  
      this.from = param['from']
    })

    this.http.get(`costumers/costumer/${this.param}`,{}).subscribe(data => {
      this.costumerData = data;   
    })
  }
}
