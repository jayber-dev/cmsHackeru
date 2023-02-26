import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { Contact } from './contact.interface';
import { httpService } from 'src/app/services/httpService/http.service';

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
    private http: httpService
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
      this.http.post('contacts/addContact', this.contactInfo).subscribe(data => {
        console.log(data);
      }).unsubscribe()
      this.router.navigateByUrl('dashboard/contacts/table/0')
    }

    if(this.router.url.match('editContact')) {
      this.contactInfo = this.addContact.value
      this.contactInfo.paramId = this.paramId
      const http = this.http.post('contacts/editContact',this.contactInfo).subscribe(data => {
        http.unsubscribe()
      })
      this.router.navigateByUrl(`dashboard/contacts/table/${this.from}`)
    }
    
  }

  ngOnInit(): void {
    if(this.router.url.match('editContact')) {
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
          zipCode:param.get('zip_code'),
          paramId:this.paramId
        })
      })
    }
    
  }
}
