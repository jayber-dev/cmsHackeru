import { EventEmitter, Inject, Injectable, Output } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn:"root"  
})
export class UtilService {
    constructor(
        private router:Router
    ){}
    private isLogged:boolean = false
    @Output() updateIsLogged = new EventEmitter()

    setLoggedTrue() {
        
        this.isLogged = true
        this.updateIsLogged.emit(this.isLogged)  
             
    }

    setLoggedFalse(){
        this.isLogged =false
        this.updateIsLogged.emit(this.isLogged)
    }

    getIsLogged(){
        return this.isLogged
    }

    currPath(){
        console.log(this.router.url)
        console.log(this.router.getCurrentNavigation())
    }



}
