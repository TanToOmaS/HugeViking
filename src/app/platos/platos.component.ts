import { Component, OnInit } from '@angular/core';
import { PlatosService } from './../platos.service';

@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.css']
})
export class PlatosComponent implements OnInit {

  platos: any[] = [];

  constructor(private _servicio: PlatosService) {
    this.platos = _servicio.obtenerPlatos();
  }

  ngOnInit(): void {
  }

}
