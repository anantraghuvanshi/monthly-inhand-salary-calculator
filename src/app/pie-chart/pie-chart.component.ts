import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { SalaryCalculatorComponent } from '../salary-calculator-component/salary-calculator-component';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
})
export class PieChartComponent {
  constructor(private salarayInstance: SalaryCalculatorComponent) {}
  ngAfterViewInit() {
    const data = {
      labels: ['Salary', 'Tax'],
      datasets: [
        {
          data: [this.salarayInstance.monthlySalary, this.salarayInstance.tax],
          backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 99, 132, 0.2)',
          ],
          borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
          borderWidth: 1,
        },
      ],
    };

    const config = {
      type: 'pie',
      data: data,
    };

    var myChart = new Chart('myChart', config);
  }
}
