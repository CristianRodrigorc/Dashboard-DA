import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'cuadro-barras',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './cuadro-barras.html',
  styleUrls: ['./cuadro-barras.scss']
})
export class CuadroBarras {
  protected readonly barChartData: ChartData<'bar'> = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    datasets: [
      {
        data: [12, 19, 3, 5, 2, 3, 11, 4, 8, 15, 9, 7],
        label: 'Unidades',
        backgroundColor: '#66BB6A'
      }
    ]
  };

  protected readonly barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: { display: true }
    },
    scales: {
      x: {},
      y: { beginAtZero: true }
    }
  };
}


