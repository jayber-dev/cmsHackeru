import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { ContactService } from 'src/app/services/contactService/contact.service';
import { Contact } from './contact.interface';

@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.scss'],
})
export class AddEditContactsComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private contactsService:ContactService,
    ) {
    this.addContact = fb.group({
      firstName: [''],
      lastName: [''],
      birthday: [''],
      email: [''],
      phone: [''],
      state: [''],
      country: [''],
      city: [''],
      street: [''],
      houseNumber: [''],
      zipCode: [''],
    });
  }
  paramId:number
  addContact: FormGroup;
  contactInfo:Contact;
  from:number
  onSubmit() {
    if(this.router.url.match('addContact')){
      this.contactInfo = this.addContact.value
      this.contactsService.addContact(this.contactInfo).subscribe(data => {
      }).unsubscribe()
      this.router.navigateByUrl('dashboard/contacts/table')
    }

    if(this.router.url.match('editContact')) {
      console.log('in edit mode submit');
      this.contactInfo = this.addContact.value
      const http = this.contactsService.editContact(this.contactInfo,this.paramId).subscribe(data => {
        http.unsubscribe()
      })
      this.router.navigateByUrl(`dashboard/contacts/table/${this.from}`)
    }
    
  }

  ngOnInit(): void {
    if(this.router.url.match('editContact')) {
      console.log('in edit mode');
      this.activatedRoute.params.subscribe(param => {
        this.from = param['from'];
        
      })
      
      this.activatedRoute.queryParamMap.subscribe(param=> {
        this.paramId = Number(param.get('id'))
        this.addContact.patchValue({
          firstName:param.get('first_name'),
          lastName:param.get('last_name'),
          birthday:param.get('birthday').slice(0,10),
          email:param.get('email'),
          phone:param.get('phone'),
          state:param.get('state'),
          country:param.get('country'),
          city:param.get('city'),
          street:param.get('street'),
          houseNumber:param.get('house_number'),
          zipCode:param.get('zip_code')
        })
        })
    }
    
  }
}
