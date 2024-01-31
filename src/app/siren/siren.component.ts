import { Component } from '@angular/core';

@Component({
  selector: 'app-siren',
  templateUrl: './siren.component.html',
  styleUrls: ['./siren.component.css']
})

export class SirenComponent {
  siren: string = '';
  isValidSiren: boolean = false;

  validateSiren() {
    if (/^\d{9}$/.test(this.siren)) {
      const digits = this.siren.split('').map(Number);
      let sum = 0;
      for (let i = 0; i < digits.length; i++) {
        let digit = digits[i];
        if (i % 2 === 1) {
          digit *= 2;
          if (digit > 9) {
            digit -= 9;
          }
        }
        sum += digit;
      }
      this.isValidSiren = sum % 10 === 0;
    }

  }
}
