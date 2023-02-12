import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Costumer } from './costumer.interface';

import { httpService } from 'src/app/services/httpService/http.service';

@Component({
  selector: 'app-add-costumer',
  templateUrl: './add-costumer.component.html',
  styleUrls: ['./add-costumer.component.scss']
})
export class AddEditCostumerComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private http: httpService,
    
    ) {
    this.addCostumer = fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      phone: [''],
      state: [''],
      country: [''],
      city: [''],
      street: [''],
      houseNumber: [''],
      zipCode: [''],
      notes:[''],
    });
  }
  from:Number
  addCostumer: FormGroup;
  costumerInfo: Costumer;
  paramId: number
  onSubmit() {
    if(this.router.url.match('addCostumer')){
      this.costumerInfo = this.addCostumer.value
      const http = this.http.post('costumers/addCostumer',this.costumerInfo).subscribe(data => {
        http.unsubscribe()
      })
      this.router.navigateByUrl('dashboard/costumers/table/0')
    }

    if(this.router.url.match('editCostumer')) {
      console.log('in edit mode submit');
      this.costumerInfo = this.addCostumer.value
      this.costumerInfo.paramId = this.paramId
      const http = this.http.post('costumers/editCostumer',this.costumerInfo).subscribe(data => {
        http.unsubscribe()
      })
      this.activatedRoute.queryParamMap.subscribe(param => {
        console.log(param);
        
      })
      this.router.navigateByUrl(`dashboard/costumers/table/${this.from}`)
    }
  }

  ngOnInit(): void {
    if(this.router.url.match('editCostumer')) {      
      this.activatedRoute.params.subscribe(param => {
        this.from = param['from'];
        
      })
      console.log('in edit mode');
      this.activatedRoute.queryParamMap.subscribe(param=> {
        console.log(param);
        
        this.paramId = Number(param.get('id'))
        this.addCostumer.patchValue({
          firstName:param.get('first_name'),
          lastName:param.get('last_name'),
          email:param.get('email'),
          phone:param.get('phone'),
          state:param.get('state'),
          country:param.get('country'),
          city:param.get('city'),
          street:param.get('street'),
          houseNumber:param.get('house_number'),
          zipCode:param.get('zip_code'),
          notes:param.get('notes')
        })
        })
    }
  }
}

