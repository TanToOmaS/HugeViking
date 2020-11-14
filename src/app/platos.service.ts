import { Injectable } from '@angular/core';

@Injectable({
  
  providedIn: 'root'
})

export class PlatosService {

  platos:any[] = [
    {    
    nombre: 'Macarrones',
    calorias: '400 kcal',
    descripción: 'El plato de carbohidratos por excelencia en casa.'
    },
    {    
      nombre: 'Cocido',
      calorias: '650 kcal',
      descripción: 'La legumbre por excelencia de los domingos.'
    }
  ]

  constructor() {
    console.log('funcionando servicio platos');
   }

   obtenerPlatos (){
     return this.platos;
   }

}
