import { Component,OnInit } from '@angular/core';
import { CostumerService } from 'src/app/services/costumersService/cosutmers.service';

@Component({
  selector: 'app-costumer-details',
  templateUrl: './costumer-details.component.html',
  styleUrls: ['./costumer-details.component.scss']
})
export class CostumerDetailsComponent implements OnInit{
  constructor(
    private costumers:CostumerService
  ){}

  data:any
  costumersData:string[]
  
  ngOnInit(): void {
    this.costumers.getCostumers().subscribe(data => {
      this.data = data
      
    })
  }
}
