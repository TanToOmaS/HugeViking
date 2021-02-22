import { Component, OnInit } from '@angular/core';
import { SemanasService } from 'src/app/services/semanas.service';
import { Plato } from '../../model/plato';
import { Semana } from '../../model/semana';
import { PlatosService } from '../../services/platos.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'HUGE VIKING';
  platos: Plato[] = [];
  semana: Semana;
  idDia: number = 0;
  idPlato: string;  

  constructor(private _servicioPlatos: PlatosService,
    private _servicioSemanas: SemanasService) {

      // _servicioSemanas.crearSemana({
      //   dias: [
      //     {orden: 0, nombre: 'Lunes', platos: []},
      //     {orden: 1, nombre: 'Martes', platos: []},
      //     {orden: 2, nombre: 'Miercoles', platos: []},
      //     {orden: 3, nombre: 'Jueves', platos: []},
      //     {orden: 4, nombre: 'Viernes', platos: []},
      //     {orden: 5, nombre: 'Sabado', platos: []},
      //     {orden: 6, nombre: 'Domingo', platos: []}
      //   ]
      // })

    _servicioSemanas.obtenerSemanas().subscribe(semanas => {
      this.semana = semanas[0];
    })

    _servicioPlatos.obtenerPlatos().subscribe(platos => {
      this.platos = platos;
    })
  }

  guardarPlato(){
    const dia = this.semana.dias.find(dia => dia.orden === this.idDia);
    const plato = this.platos.find(plato => plato.id === this.idPlato);
    dia.platos.push(plato);
    this._servicioSemanas.actualizarSemana(this.semana);
  }

  eliminarPlato() {
    const dia = this.semana.dias.find(dia => dia.orden === this.idDia);
    const plato = this.platos.find(plato => plato.id === this.idPlato);
    dia.platos.pop();
    this._servicioSemanas.actualizarSemana(this.semana);
  }

  ngOnInit(): void {
  }

}



