import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class CostumerService {
    constructor(
        private http:HttpClient
    ){}

    getCostumers(from){
        return this.http.get(`http://127.0.0.1:3000/costumers/`,{params:{"from":from}})
    }

    getCostumer(id){
        console.log(id);
        
        return this.http.get(`http://127.0.0.1:3000/costumers/costumer/${id}`)
    }
}