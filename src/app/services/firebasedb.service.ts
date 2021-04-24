import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import { Practica } from '../models/practica';

@Injectable({
  providedIn: 'root'
})
export class FirebasedbService {

  constructor(private firestore: AngularFirestore) { }

  getPractiques(): Observable<Practica[]> {
    return this.firestore.collection<Practica>("practiques").valueChanges();
  }
}
