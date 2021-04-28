import { Component } from '@angular/core';


import { FirebasedbService } from './services/firebasedb.service';
import { Practica } from './models/practica';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
 /*public practiques: Practica[]; 
 constructor(private firedb: FirebasedbService) {
    this.firedb.getPractiques().subscribe(
      (originalPractiques: Practica[]) => {
        this.practiques = originalPractiques;
      }
    )
 }
*/
}
  
