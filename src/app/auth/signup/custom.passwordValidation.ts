import {AbstractControl} from '@angular/forms';
export class PasswordValidation {

    static MatchPassword(AC: AbstractControl) {
       let password = AC.get('password').value; // to get value in input tag
       let repassword = AC.get('repassword').value; // to get value in input tag
        if(password != repassword) {
            console.log('false');
            AC.get('repassword').setErrors( {MatchPassword: true} )
        } else {
            console.log('true');
            return null
        }
    }
}