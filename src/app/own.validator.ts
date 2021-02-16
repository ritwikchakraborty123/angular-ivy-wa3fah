import { AbstractControl, ValidationErrors } from '@angular/forms'
 
export function own(control: AbstractControl): ValidationErrors | null {
 
    const v=control.value;
      
 
    if (v.length && Number(v.charAt(0)) != 9) {
      return { 'own': true, 'firstvalue': 9 };
    } 
 
    return null;
 
}
