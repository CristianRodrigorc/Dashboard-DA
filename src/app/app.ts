import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChartsPanel } from './components/charts-panel/charts-panel';
import { CuadroBarras } from './components/cuadro-barras/cuadro-barras';
import { CuadroDona } from './components/cuadro-dona/cuadro-dona';
import { CuadroPastel } from './components/cuadro-pastel/cuadro-pastel';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChartsPanel, CuadroBarras, CuadroDona, CuadroPastel],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly titulo = 'dashboard-app';
}
