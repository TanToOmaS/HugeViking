import { Component, OnInit } from '@angular/core';
import { Plato } from '../model/plato';
import { PlatosService } from './../platos.service';


@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.css']
})
export class PlatosComponent implements OnInit {

  platos: Plato[] = [];

  constructor(private _servicio: PlatosService) {
    _servicio.obtenerPlatos().subscribe(platos => {
      this.platos = platos;
    })
  }

  ngOnInit(): void {
  }

}
