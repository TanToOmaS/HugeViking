import { Component, OnInit } from '@angular/core';
import { Plato } from '../../model/plato';
import { PlatosService } from '../../services/platos.service';


@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.css']
})
export class PlatosComponent implements OnInit {

  platos: Plato[] = [];
  // platoNuevo = this.platos;
  
  constructor(private _servicioPlatos: PlatosService) {
    _servicioPlatos.obtenerPlatos().subscribe(platos => {
      this.platos = platos;
    })
   
  }
  // Creando función para añadir platos a FireBase
  // guardarPlato(){
  // const plato = this.platos;  
  // this._servicioPlatos.crearPlato(plato);
  // }

ngOnInit(): void {
}

}
