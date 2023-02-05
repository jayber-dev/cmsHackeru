import { EventEmitter, Inject, Injectable, Output } from "@angular/core";

@Injectable({
  providedIn:"root"  
})
export class UtilService {
    private isLogged:boolean;
    @Output() updateIsLogged = new EventEmitter()

    setLoggedTrue() {
        
        this.isLogged = true
        this.updateIsLogged.emit(this.isLogged)        
    }

    setLoggedFalse(){
        this.isLogged =false
        this.updateIsLogged.emit(this.isLogged)
    }

}
