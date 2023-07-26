import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kostnadsuppdelning';
  totalExpenses: number;
  person1Income: number;
  person2Income: number;
  person1Share: number | null = null;
  person2Share: number | null = null;
  person1Percentage: number | null = null;
  person2Percentage: number | null = null;

  constructor () { }

  calculateShares() {
    const totalIncome = this.person1Income + this.person2Income;

    if (totalIncome === 0) {
      this.person1Share = null;
      this.person2Share = null;
      this.person1Percentage = null;
      this.person2Percentage = null;
    } else {
      this.person1Share = (this.person1Income / totalIncome) * this.totalExpenses;
      this.person2Share = (this.person2Income / totalIncome) * this.totalExpenses;

      this.person1Percentage = (this.person1Share / this.totalExpenses) * 100;
      this.person2Percentage = (this.person2Share / this.totalExpenses) * 100;
    }
  }
}
