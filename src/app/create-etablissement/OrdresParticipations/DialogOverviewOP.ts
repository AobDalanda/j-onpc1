import {Component, Inject, OnInit} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {OpDialogue} from "../../Model/ExtraData/ordresParticipation.model";
import {FormControl, Validators} from "@angular/forms";
import {Delegue} from "../../Model/ExtraData/delegue.model";
import {Produit} from "../../Model/ExtraData/produit.model";
import {ExtradataService} from "../../service/extradata/extradata.service";

@Component({
  selector: 'dialog-overview-OP-dialog',
  templateUrl: 'dialog-overview-OP-dialog.html',
})
export class DialogOverviewOP implements  OnInit{
  listeProduits!: Produit[];
  selectedproductId!:number;
  productprice!:number;
  emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
  ]);

  constructor(public dialogRef1: MatDialogRef<DialogOverviewOP>,
              @Inject(MAT_DIALOG_DATA) public dataOp: OpDialogue, private extraDataService:ExtradataService) {}

  ngOnInit() {

            /**  Retrieve data for "products" */
            this.extraDataService.ListeProduct().subscribe(
              (listedesproduits)=>{  this.listeProduits=listedesproduits;  }  );
  }
  onNoClick(): void {
    this.dialogRef1.close();
  }

  selectproductid(){
    console.log("le produit selectionné a pour id : "+ this.selectedproductId);
  }

}
