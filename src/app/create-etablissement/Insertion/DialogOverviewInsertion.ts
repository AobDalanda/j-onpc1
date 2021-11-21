import {Component, Inject, OnInit} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, Validators} from "@angular/forms";
import {InsertionDialogue} from "../../Model/ExtraData/insertionData";
import {Dptmts} from "../../Model/ExtraData/dptmt.model";
import {ExtradataService} from "../../service/extradata/extradata.service";

export interface Item {
  id: string,
  name: string,
  capital: string,
  phone: string,
  currency: string
}

export interface DownLineItem {
  item: Item,
  parent: DownLineItem
}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-insertion-dialog.html',
})
export class DialogOverviewInsertion implements  OnInit{
  listeDptmt!: Dptmts[];
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(public dialogRef2: MatDialogRef<DialogOverviewInsertion>,
              @Inject(MAT_DIALOG_DATA) public data1: InsertionDialogue,private extraDataService: ExtradataService) {}

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
