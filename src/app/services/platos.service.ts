import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Plato } from '../model/plato';
import { map } from 'rxjs/operators';

@Injectable({

  providedIn: 'root'
})

export class PlatosService {

  private platosCollection: AngularFirestoreCollection<Plato>;


  constructor(private angularFirestore: AngularFirestore) {
    this.platosCollection = this.angularFirestore.collection('platos');
  }

  obtenerPlatos(): Observable<Plato[]> {
    // Escuchar a todos los cambios que puedan surgir en la coleccion de platos
    return this.platosCollection.snapshotChanges().pipe(
      // Transformar los objetos de cambios de firestore
      map(changes =>
        changes.map(change => {
          // Convertir documento de firestore a nuestro dominio (Plato)
          const plato = change.payload.doc.data() as Plato;
          plato.id = change.payload.doc.id;
          return plato;
        })
      )
    );
  }

  // obtenerUno(i: number): Plato {
  //   return this.platos[i];
  // }

  // create(plato: Plato) {
  //   this.platosCollection.add(plato);
  // };

}
