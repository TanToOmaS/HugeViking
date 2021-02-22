import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Plato } from '../model/plato';
import { map } from 'rxjs/operators';

@Injectable({

  providedIn: 'root'
})

export class PlatosService {

  platosCollection: AngularFirestoreCollection<Plato>;


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

  crearPlato(plato: Plato): void {
    this.platosCollection.add(plato);
  }

  actualizarPlato(plato: Plato): void {
    this.angularFirestore.doc("platos/" + plato.id).update(plato);
  }
  
  borrarPlato(plato: Plato): void {
    this.angularFirestore.doc("platos/" + plato.id).delete();
  }

  obtenerId(i: number): Plato {
    return this.platosCollection[i];
  }

}
