import { Injectable } from '@angular/core';

@Injectable({
  
  providedIn: 'root'
})

export class PlatosService {

  platos:any[] = [{
    
    nombre: 'Macarrones',
    calorias: '400 kcal',
    descripción: 'El plato de carbohidratos por excelencia en casa.'
    },
  ]

  constructor() { }
}
