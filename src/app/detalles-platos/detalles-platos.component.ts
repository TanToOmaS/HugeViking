import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plato } from '../model/plato';
import { PlatosService } from '../services/platos.service';

@Component({
  selector: 'app-detalles-platos',
  templateUrl: './detalles-platos.component.html',
  styleUrls: ['./detalles-platos.component.css']
})
export class DetallesPlatosComponent implements OnInit {

  detallesPlatos: Plato;

  constructor(
    private ruta:ActivatedRoute,
    private _servicio:PlatosService
  ) { 
    this.ruta.params.subscribe(params=>{
      console.log (params['id'])      
      this.detallesPlatos = this._servicio.obtenerId(params['id'])
    })
  }

  ngOnInit(): void {
  }

}
