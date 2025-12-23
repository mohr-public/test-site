import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SeccionCabPag } from "./components/seccion-cab-pag/seccion-cab-pag";
import { SeccionPiePag } from "./components/seccion-pie-pag/seccion-pie-pag";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SeccionCabPag, SeccionPiePag],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('test-site');
}
