import {Component, Inject, OnInit} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, Validators} from "@angular/forms";
import {ContactDialogue} from "../../Model/ExtraData/DialogData";

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-Contact-dialog.html',
})
export class DialogOverviewExampleDialog implements  OnInit{
  constructor(public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data1: ContactDialogue) {}

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }



}
