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


  param:string
  data:any
  ngOnInit(): void {
    this.route.params.subscribe(param =>{
      this.param = (param['id']);  
    })

    this.contacts.getContact(this.param).subscribe(data => {
      this.data = (data);
      console.log(this.data);
      
    })
  }
}

