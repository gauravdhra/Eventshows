import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormArray,FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-host-dashboard',
  templateUrl: './host-dashboard.component.html',
  styleUrls: ['./host-dashboard.component.scss']
})
export class HostDashboardComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  isPublic;
  uploadedFiles: any[] = [];
  eventSchedule:Date;
  animal: string;
  name: string;

  constructor(public dialog: MatDialog,private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      privacy:['',Validators.required],
      imageupload:['',Validators.required],
      eventDate:['',Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      hosts: this._formBuilder.array([
        new FormControl(''),
        new FormControl(''),
      ])
    });
  }


  get hosts(): FormArray {
    return (<FormArray>this.thirdFormGroup.get('hosts'));
 }
  addHost() {
    const formArray = this.hosts;
    formArray.insert(0, this._formBuilder.control(''));
 }
  removeHost(index) {
    const formArray = this.hosts;
    if (formArray.length > 1)
    formArray.removeAt(index)
 }
  
    onUpload(event) {
        for(let file of event.files) {
            this.uploadedFiles.push(file);
        }

    }

      createEvent(){
        this.openDialog();
      }

  openDialog(): void {
    const dialogRef = this.dialog.open(SuccessDialog, {
      width: '1500px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}

@Component({
  selector: 'success-dialog',
  templateUrl: 'success-dialog.html',
  styleUrls: ['./success-dialog.scss']

})
export class SuccessDialog {

  constructor(
    public dialogRef: MatDialogRef<SuccessDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}