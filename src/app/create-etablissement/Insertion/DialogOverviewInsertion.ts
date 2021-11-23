import {Component, Inject, OnInit} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, Validators} from "@angular/forms";
import {InsertionDialogue} from "../../Model/ExtraData/insertionData";
import {ExtradataService} from "../../service/extradata/extradata.service";
import {Dptmts} from "../../Model/ExtraData/dptmt.model";

@Component({
  selector: 'dialog-overview-insertion-dialog',
  templateUrl: 'dialog-overview-insertion-dialog.html',
})
export class DialogOverviewInsertion implements  OnInit{
  constructor(public dialogRef2: MatDialogRef<DialogOverviewInsertion>,
              @Inject(MAT_DIALOG_DATA) public data2: InsertionDialogue, private extraDataService: ExtradataService) {}


  listeDptmt!: Dptmts[];

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  ngOnInit() {
    /** Retrieve data for department */
    this.extraDataService.ListeDptmt().subscribe(
      (ListeDptmt)=>{this.listeDptmt=ListeDptmt
      }
    );
  }
  onNoClick(): void {
    this.dialogRef2.close();
  }



}
