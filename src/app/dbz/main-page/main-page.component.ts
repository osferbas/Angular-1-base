import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'dbz-page',
  templateUrl: './main-page.component.html',

})
export class MainPageComponent  {

  nuevo:Personaje={
    nombre:"maestro roshi",
    poder:45
  }
  constructor(){
  }
 


  
}
