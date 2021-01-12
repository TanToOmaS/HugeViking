import { Component, OnInit } from '@angular/core';
import { PlatosService } from './../platos.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  title = 'HUGE VIKING';
  platos: any[] = [];
  dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo" ]

  constructor(private _servicio: PlatosService) {
    this.platos = _servicio.obtenerPlatos();
  }

  ngOnInit(): void {
  }

}

  

