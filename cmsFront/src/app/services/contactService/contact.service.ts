import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn:'root'
})
export class ContactService{
    constructor(
        private http:HttpClient
    ){}

    url:string = 'http://127.0.0.1:3000'

    getContacts(from){
        return this.http.get(`${this.url}/contacts/`,{params:{"from":from}})
    }

    getContact(id){
        console.log(id);
        
        return this.http.get(`${this.url}/contacts/contact/${id}`)
    }

    searchContacts(query,from){
        return this.http.get(`${this.url}/contacts/search/${query}`,{params:{"from":from}})
    }

    deleteCostumer(id){
        return this.http.delete(`${this.url}/costumers/deleteCostumer/${id}`)
    }
}