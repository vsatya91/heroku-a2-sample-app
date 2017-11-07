import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appEmailValidator][formControlName], [appEmailValidator][formControl],[appEmailValidator][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => EmailValidatorDirective), multi: true }
  ]
})
export class EmailValidatorDirective implements Validator {
  validate(c: AbstractControl): { [key: string]: any; } {
    //let EMAIL_REGEXP_PATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    let EMAIL_REGEXP_PATTERN = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    return EMAIL_REGEXP_PATTERN.test(c.value) ? null : {
      validateEmail: {
        valid: false
      }
    };
  }


  constructor() { }

}
