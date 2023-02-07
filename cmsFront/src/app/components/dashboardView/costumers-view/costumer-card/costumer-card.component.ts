import { Component,OnInit } from '@angular/core';
import { CostumerService } from 'src/app/services/costumersService/cosutmers.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-costumer-card',
  templateUrl: './costumer-card.component.html',
  styleUrls: ['./costumer-card.component.scss']
})
export class CostumerCardComponent implements OnInit{
  constructor(
    private costumers:CostumerService,
    private route:ActivatedRoute
  ){}

  param:string
  data:any
  ngOnInit(): void {
    this.route.params.subscribe(param =>{
      this.param = (param['id']);  
    })

    this.costumers.getCostumer(this.param).subscribe(data => {
      this.data = (data);   
    })
  }
}
