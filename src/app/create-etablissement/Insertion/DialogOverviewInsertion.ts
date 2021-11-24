import {Component, Inject, OnInit} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, Validators} from "@angular/forms";
import {InsertionDialogue} from "../../Model/ExtraData/insertionData";
import {ExtradataService} from "../../service/extradata/extradata.service";
import {Dptmts} from "../../Model/ExtraData/dptmt.model";
import {Formatpub} from "../../Model/ExtraData/formatpub.model";
import {EmplaPub} from "../../Model/ExtraData/emplapub.model";

@Component({
  selector: 'dialog-overview-insertion-dialog',
  templateUrl: 'dialog-overview-insertion-dialog.html',
})
export class DialogOverviewInsertion implements  OnInit{
  constructor(public dialogRef2: MatDialogRef<DialogOverviewInsertion>,
              @Inject(MAT_DIALOG_DATA) public data2: InsertionDialogue, private extraDataService: ExtradataService) {}


  listeDptmt!: Dptmts[];
  listeFormatPub!: Formatpub[];
  listeEmplPub!: EmplaPub[];

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);


  ngOnInit() {
    this.data2.type="publicité";
    this.data2.optionprint="indeterminé";
    this.data2.actif="Oui";
    /** Retrieve data for department */
    this.extraDataService.ListeDptmt().subscribe(
      (ListeDptmt)=>{this.listeDptmt=ListeDptmt
      }
    );
     /** Retrieve data for pub format */
    this.extraDataService.ListeFormatPub().subscribe(
      (listeFormatPub)=>{this.listeFormatPub=listeFormatPub}
    );
     /** Retrieve data for 'emplacement pub' */
    this.extraDataService.ListeEmplacPub().subscribe(
      (listeEmplPub)=>{this.listeEmplPub=listeEmplPub}
    );


  }
  onNoClick(): void {
    this.dialogRef2.close();
  }



}
