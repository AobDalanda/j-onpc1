import {Component, Inject, OnInit} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {OpDialogue} from "../../Model/ExtraData/ordresParticipation.model";

@Component({
  selector: 'dialog-overview-OP-dialog',
  templateUrl: 'dialog-overview-OP-dialog.html',
})
export class DialogOverviewOP implements  OnInit{
  constructor(public dialogRef1: MatDialogRef<DialogOverviewOP>,
              @Inject(MAT_DIALOG_DATA) public dataOp: OpDialogue) {}



  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef1.close();
  }



}
