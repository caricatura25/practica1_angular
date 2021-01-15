import { Component } from '@angular/core';


import { Persona } from './Persona';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  miclase: Persona = new Persona();
  title = 'prueba'; 
}
