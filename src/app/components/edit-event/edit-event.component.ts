import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  isPublic;
  uploadedFiles: any[] = [];
  eventSchedule: Date;
  animal: string;
  name: string;

  constructor( private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      privacy: ['', Validators.required],
      imageupload: ['', Validators.required],
      eventDate: ['', Validators.required],
      hosts: this._formBuilder.array([
        new FormControl(''),
        new FormControl(''),
      ])
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],

    });
    this.thirdFormGroup = this._formBuilder.group({
      hosts: this._formBuilder.array([
        new FormControl(''),
        new FormControl(''),
      ])
    });
  }

editEvent(){
  
}
  get hosts(): FormArray {
    return (<FormArray>this.firstFormGroup.get('hosts'));
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
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

  }



}
