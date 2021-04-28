import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AngularFirestore } from '@angular/fire/firestore'

import { Practica } from '../models/practica';

@Injectable({
  providedIn: 'root'
})
export class FirebasedbService {

  constructor(private firestore: AngularFirestore) { }

  checkAllowedUser(email: string): Observable<any []> {
    return this.firestore.collection("allowed_users", ref => this.queryByEmail(email, ref)).valueChanges();
  }

  private queryByEmail(email: string, ref: any) {
    return ref.where("email", "==", email);
  }

  getPractiques(): Observable<Practica[]> {
    return this.firestore.collection<Practica>("Practiques").valueChanges();
  }
}
