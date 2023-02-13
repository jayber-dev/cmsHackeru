import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { httpService } from 'src/app/services/httpService/http.service';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent {
  constructor(
    private http: httpService,
    private route:ActivatedRoute
  ){}

  from:number
  param:string
  data:any
  ngOnInit(): void {
    this.route.params.subscribe(param =>{
      this.param = (param['id']);  
      this.from = param['from']
    })

    this.http.get(`contacts/contact/${this.param}`,{}).subscribe(data => {
      this.data = (data);
    })
  }
}

