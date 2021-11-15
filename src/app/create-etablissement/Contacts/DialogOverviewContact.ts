import {Component, Inject, OnInit} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ContactDialogue} from "../../Model/ExtraData/DialogData";

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-Contact-dialog.html',
})
export class DialogOverviewExampleDialog implements  OnInit{
  constructor(public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: ContactDialogue) {}

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
