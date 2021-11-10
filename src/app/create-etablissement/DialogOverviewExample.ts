import {Component, Inject, OnInit} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ContactDialogue} from "../Model/ExtraData/DialogData";

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog implements  OnInit{
  formcontactGroup!: FormGroup;
  constructor(public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: ContactDialogue) {}


  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }



}
