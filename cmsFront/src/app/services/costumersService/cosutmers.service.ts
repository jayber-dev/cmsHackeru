import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class CostumerService {
    constructor(
        private http:HttpClient
    ){}

    url:string = 'http://127.0.0.1:3000'

    getCostumers(from){
        return this.http.get(`${this.url}/costumers/`,{params:{"from":from}})
    }

    getCostumer(id){
        console.log(id);
        
        return this.http.get(`${this.url}/costumers/costumer/${id}`)
    }

    searchCostumer(query,from){
        return this.http.get(`${this.url}/costumers/search/${query}`,{params:{"from":from}})
    }

    deleteCostumer(id){
        return this.http.delete(`${this.url}/costumers/deleteCostumer/${id}`)
    }
}