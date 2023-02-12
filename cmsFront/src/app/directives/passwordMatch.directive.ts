import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";


export const passwordsMatch: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const pass = control.get('password');
    const passRepeat = control.get('repeatedPassword');
   
    return (passRepeat.value !== '' && pass.value === passRepeat.value) ? null:{passwordsMatch:false};
  };