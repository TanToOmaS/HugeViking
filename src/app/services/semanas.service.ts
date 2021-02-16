import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Plato } from '../model/plato';
import { map } from 'rxjs/operators';
import { Semana } from '../model/semana';

@Injectable({

  providedIn: 'root'
})

export class SemanasService {

  private semanasCollection: AngularFirestoreCollection<Semana>;

  constructor(private angularFirestore: AngularFirestore) {
    this.semanasCollection = this.angularFirestore.collection('semanas');
  }

  obtenerSemanas(): Observable<Semana[]> {
    // Escuchar a todos los cambios que puedan surgir en la coleccion de semanas
    return this.semanasCollection.snapshotChanges().pipe(
      // Transformar los objetos de cambios de firestore
      map(changes =>
        changes.map(change => {
          // Convertir documento de firestore a nuestro dominio (Semana)
          const semana = change.payload.doc.data() as Semana;
          semana.id = change.payload.doc.id;
          return semana;
        })
      )
    );
  }

  crearSemana(semana: Semana): void {
    this.semanasCollection.add(semana);
  }

  actualizarSemana(semana: Semana): void {
    this.angularFirestore.doc("semanas/" + semana.id).update(semana);
  }
  
  borrarSemana(semana: Semana): void {
    this.angularFirestore.doc("semanas/" + semana.id).delete();
  }
}
