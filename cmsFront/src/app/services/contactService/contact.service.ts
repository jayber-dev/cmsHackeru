import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Form, FormGroup } from "@angular/forms";
import { Contact } from "src/app/components/dashboardView/addEdit-contacts/contact.interface";


@Injectable({
    providedIn:'root'
})
export class ContactService{
    constructor(
        private http:HttpClient
    ){}

    url:string = 'http://127.0.0.1:3000'

    // getContacts(from){
    //     return this.http.get(`${this.url}/contacts/`,{params:{"from":from}})
    // }

    getContact(id){
        console.log(id);
        
        return this.http.get(`${this.url}/contacts/contact/${id}`)
    }

    searchContacts(query,from){
        return this.http.get(`${this.url}/contacts/search/${query}`,{params:{"from":from}})
    }

    // deleteContact(id){
    //     return this.http.delete(`${this.url}/contacts/deleteContact/${id}`)
    // }

    // addContact(contact:Contact){
    //     return this.http.post(`${this.url}/contacts/addContact`, contact)
    // }

    // editContact(contact:Contact,id:number){
    //     return this.http.post(`${this.url}/contacts/editContact`, {data:contact,id:id})
    // }
}