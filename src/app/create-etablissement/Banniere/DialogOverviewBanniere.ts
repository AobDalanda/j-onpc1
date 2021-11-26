import {Component, Inject, OnInit} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, Validators} from "@angular/forms";
import {ContactDialogue} from "../../Model/ExtraData/DialogData";
import {Banniere} from "../../Model/ExtraData/banniere.model";
import {ExtradataService} from "../../service/extradata/extradata.service";
import {Dptmts} from "../../Model/ExtraData/dptmt.model";
import {regionData} from "../../Model/ExtraData/region.model";

@Component({
  selector: 'dialog-overview-BA-dialog',
  templateUrl: 'dialog-overview-BA-dialog.html',
})
export class DialogOverviewBanniere implements  OnInit{
  date = new FormControl(new Date());
  listeDptmt!: Dptmts[];
  listeRegion!:regionData[];
  base64File: null = null;
  filename: null = null;

  constructor(public dialogRef: MatDialogRef<DialogOverviewBanniere>,
              @Inject(MAT_DIALOG_DATA) public dataB: Banniere, private extraDataService: ExtradataService) {}

  onFileSelect(e: any): void {
    try {
      const file = e.target.files[0];
      const fReader = new FileReader()
      fReader.readAsDataURL(file)
      fReader.onloadend = (_event: any) => {
        this.filename = file.name;
        this.base64File = _event.target.result;
      }
    } catch (error) {
      this.filename = null;
      console.log('no file was selected...');
    }
  }



  ngOnInit() {
          /** Retrieve data for department */
          this.extraDataService.ListeDptmt().subscribe(
            (ListeDptmt)=>{this.listeDptmt=ListeDptmt
            }
          );
          /** Retrieve data for region */
          this.extraDataService.ListeRegion().subscribe(
            (ListeRegion)=>{this.listeRegion=ListeRegion}
          );

  }
  onNoClick(): void {
    this.dialogRef.close();
  }



}
