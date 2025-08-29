import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'cuadro-dona',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './cuadro-dona.html',
  styleUrls: ['./cuadro-dona.scss']
})
export class CuadroDona {
  protected readonly doughnutChartData: ChartData<'doughnut'> = {
    labels: ['Rojo', 'Azul', 'Amarillo', 'Verde', 'Morado'],
    datasets: [
      {
        data: [300, 50, 100, 80, 120],
        backgroundColor: ['#EF5350', '#42A5F5', '#FFEE58', '#66BB6A', '#AB47BC']
      }
    ]
  };

  protected readonly doughnutChartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    plugins: {
      legend: { display: true }
    }
  };
}


