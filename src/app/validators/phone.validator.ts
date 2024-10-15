import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import parsePhoneNumberFromString from 'libphonenumber-js';

export function phoneValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const phoneNumber = parsePhoneNumberFromString(control.value);

    if (!control.value) {
      return null;
    }

    return phoneNumber && phoneNumber.isValid()
      ? null
      : { invalidPhoneNumber: true };
  };
}
