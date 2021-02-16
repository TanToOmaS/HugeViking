import { Component, OnInit } from '@angular/core';
import { Plato } from '../../model/plato';
import { PlatosService } from '../../services/platos.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  title = 'HUGE VIKING';
  platos: Plato[] = [];
  dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo" ]

  // platoSeleccionado = this._servicio.obtenerUno(params['id'])
  // guardarPlato() {
  //   this.plato
  // }

  constructor(private _servicio: PlatosService) {
    _servicio.obtenerPlatos().subscribe(platos => {
      this.platos = platos;
  })
    }
  ngOnInit(): void {
  }

}

  

