import { AbstractControl, ValidationErrors } from '@angular/forms'
 
export function cityvalid(control:AbstractControl) : ValidationErrors | null {
  const v=control.value;

  if(v!="kolkata" && v!="howrah"){
    return { 'cityvalid': true, 'curr_value': v };
  }
  
  return null;
}