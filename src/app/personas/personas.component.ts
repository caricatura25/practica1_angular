import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent  {

  persona1 = new Persona("Carlos","Rodriguez",21,"Masculino");
  constructor()
     { }
 
}
