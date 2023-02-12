import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Costumer } from "src/app/components/dashboardView/addEdit-costumer/costumer.interface";

@Injectable({
    providedIn:'root'
})

export class CostumerService {
    constructor(
        private http:HttpClient
    ){}

    url:string = 'http://127.0.0.1:3000'

    // getCostumers(from){
    //     return this.http.get(`${this.url}/costumers/`,{params:{"from":from}})
    // }

    getCostumer(id){
        console.log(id);
        
        return this.http.get(`${this.url}/costumers/costumer/${id}`)
    }

    searchCostumer(query,from){
        return this.http.get(`${this.url}/costumers/search/${query}`,{params:{"from":from}})
    }

    // addCostumer(costumer:Costumer){
    //     console.log(costumer);
        
    //     return this.http.post(`${this.url}/costumers/addcostumer`, costumer)
    // }

    // editCostumer(contact:Costumer,id:number){
    //     return this.http.post(`${this.url}/costumers/editCostumer`, {data:contact,id:id})
    // }

    // deleteCostumer(id){
    //     return this.http.delete(`${this.url}/costumers/deleteCostumer/${id}`)
    // }
}