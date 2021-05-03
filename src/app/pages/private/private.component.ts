import { Component, OnInit } from '@angular/core';
import { Practica } from 'src/app/models/practica';
import { FirebasedbService } from 'src/app/services/firebasedb.service';
import * as ClassicEditor from '../../../ckeditor5/build/ckeditor'

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit {

  public textEditor = ClassicEditor;
  public editorData: string = "";
  public editorConfig: any = {};



  public practiques: Practica[];
  constructor(private firedb: FirebasedbService) {
    this.editorConfig = {
      toolbar: {
        items: ['heading', '|',
        'fontfamily', 'fontsize', 'fontColor', 'fontBackgroundColor', 'highlight', '|',
        'bold', 'italic', 'strikethrough','horizontalLine','underline', 'subscript', 'superscript', '|',
        'link', '|',
        'alignment','outdent', 'indent', 'bulletedList', 'numberedList', 'todoList', '|',
        'code', 'codeBlock','htmlEmbed' , '|',
        '-', // break point
        'insertTable','imageInsert','imageUpload', 'blockQuote', 'mediaEmbed','|',
        'undo', 'redo' ,'|',
        'MathType', 'ChemType', 'specialCharacters'
        ],
        shouldNotGroupWhenFull: true
      },
      image: {
        toolbar: [
          'imageStyle:full', 'imageStyle:side', '|',
          'imageTextAlternative'
        ],
        styles: [
          'full', 'side'
        ]
      }
    }
  }

  ngOnInit(): void {
    this.firedb.getPractiques().subscribe(
      (originalPractiques: Practica[]) => {
        this.practiques = originalPractiques;
      }
    )
  }


  checkText() {
    console.log(this.editorData);
  }

}
