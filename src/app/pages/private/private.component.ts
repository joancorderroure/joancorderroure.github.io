import { Component, OnInit } from '@angular/core';
import { Practica } from 'src/app/models/practica';
import { FirebasedbService } from 'src/app/services/firebasedb.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit {

  public practiques: Practica[]; 
  constructor(private firedb: FirebasedbService) {}
  
  ngOnInit(): void {
    this.firedb.getPractiques().subscribe(
      (originalPractiques: Practica[]) => {
        this.practiques = originalPractiques;
      }
    )
  }

}
