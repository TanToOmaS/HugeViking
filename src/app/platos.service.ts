import { Injectable } from '@angular/core';

@Injectable({
  
  providedIn: 'root'
})

export class PlatosService {

  platos:any[] = [
    {    
    nombre: 'Macarrones',
    calorias: '400 kcal',
    descripcion: 'El plato de carbohidratos por excelencia en casa.'
    },
    {    
      nombre: 'Cocido',
      calorias: '650 kcal',
      descripcion: 'La legumbre por excelencia de los domingos.'
    }
  ]

  constructor() {
    console.log('funcionando servicio platos');
   }

   obtenerPlatos (){
     return this.platos;
   }
   obtenerUno(i) {
     return this.platos[i];
   }

}
