import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

interface listeTypeDptandEtablishment {
  value: string;
  viewValue: string;
}




@Component({
  selector: 'cf-create-etablissement',
  templateUrl: './create-etablissement.component.html',
  styleUrls: ['./create-etablissement.component.css']
})
export class CreateEtablissementComponent implements OnInit {
  /**
   * liste departement
   * doit provenir d'une API
   */
  dpt: listeTypeDptandEtablishment[] = [
    {value: '01', viewValue: 'Ain'},
    {value: '35', viewValue: 'Ille-et-Villaine'},
    {value: '22', viewValue: "Côtes-d'Armor"}
  ];
  /**
   * Liste type d'etablissement
   */
  typeEta:listeTypeDptandEtablishment[]=[
    {value: '1', viewValue: 'Etablissement'},
    {value: '2', viewValue: 'Organisme'},
    {value: '3', viewValue: 'Internat'},
    {value: '4', viewValue: 'Fournisseur'},
    {value: '5', viewValue: 'Groupes scolaires'},
  ]

  constructor(private _formBuilder: FormBuilder) { }

  title = 'newMat';
  isLinear = true;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;


  ngOnInit(){
    /**
     * formulaire "departement et type etablissement"
     */
    this.firstFormGroup = this._formBuilder.group({
          /**
           * champs obligatoires
           */
              department: ['', Validators.required],
              typeEtablissement: ['', Validators.required]

    });

    /**
     * formulaire cordonnées
     */
    this.secondFormGroup = this._formBuilder.group({
      /**
       * champs obligatoires
       */
      amount: ['', Validators.required],
      stock: ['', Validators.required]
    });
  }



  submit(){
    console.log(this.firstFormGroup.value);
    console.log(this.secondFormGroup.value);
  }
}
