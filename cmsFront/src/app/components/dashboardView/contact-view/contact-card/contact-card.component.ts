import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from 'src/app/services/contactService/contact.service';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent {
  constructor(
    private contacts:ContactService,
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

    this.contacts.getContact(this.param).subscribe(data => {
      this.data = (data);
    })
  }
}

