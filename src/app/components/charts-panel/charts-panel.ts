import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'charts-panel',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './charts-panel.html',
  styleUrl: './charts-panel.scss'
})
export class ChartsPanel {
  protected readonly lineChartData: ChartData<'line'> = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul','Ago','Sep','Oct','Nov','Dic'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Ventas',
        tension: 0.4,
        fill: false,
        borderColor: '#42A5F5',
        backgroundColor: 'rgba(66, 165, 245, 0.2)'
      }
    ]
  };

  protected readonly lineChartOptions: ChartOptions<'line'> = {
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


