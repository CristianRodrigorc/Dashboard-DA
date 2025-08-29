import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'cuadro-pastel',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './cuadro-pastel.html',
  styleUrls: ['./cuadro-pastel.scss']
})
export class CuadroPastel {
  protected readonly pieChartData: ChartData<'pie'> = {
    labels: ['Ventas', 'Costos', 'Beneficio'],
    datasets: [
      {
        data: [45, 35, 20],
        backgroundColor: ['#42A5F5', '#EF5350', '#66BB6A']
      }
    ]
  };

  protected readonly pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
    plugins: {
      legend: { display: true }
    }
  };
}


