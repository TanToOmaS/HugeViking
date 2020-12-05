import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlatosService } from './../platos.service';

@Component({
  selector: 'app-detalles-platos',
  templateUrl: './detalles-platos.component.html',
  styleUrls: ['./detalles-platos.component.css']
})
export class DetallesPlatosComponent implements OnInit {

  platos: any [] = [];
  
  constructor(
    private ruta:ActivatedRoute,
    private _servicio:PlatosService
  ) { 
    this.ruta.params.subscribe(params=>{
      console.log (params['id'])
      this.platos = this._servicio.obtenerPlatos();
      this.platos = this._servicio.obtenerUno(params['id'])
    })
  }

  ngOnInit(): void {
  }

}
