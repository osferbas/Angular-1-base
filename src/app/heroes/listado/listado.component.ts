import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

heroes:string[]=["Spiderman","Hulk","Thor","IronMan",];
borrado:string|undefined=""



borrarHeroe():void{
  
  const heroeBorrado = this.heroes.shift()
  this.borrado=heroeBorrado
  
}

}
