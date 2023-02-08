import {Pipe, PipeTransform} from '@angular/core'

@Pipe({name:'ageCalc'})
export class AgeCalc implements PipeTransform {
    transform(value: string) {
        const today = new Date();        
        return today.getFullYear() - Number(value.slice(0,4))
    }

}