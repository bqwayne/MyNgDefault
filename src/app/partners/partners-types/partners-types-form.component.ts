import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { MdDialogRef } from '@angular/material';


@Component({
    selector: 'app-partner-type-form',
    templateUrl: './partners-types-form.component.html',
    styleUrls: ['./partners-types-form.component.scss']
})


export class PartnersTypeFormComponent implements OnInit {
    partnerTypesForm: FormGroup;


    constructor(private fb: FormBuilder, public dialogRef: MdDialogRef<PartnersTypeFormComponent>){}


    ngOnInit() {
        this.buildForm();
    }

    buildForm(){
        this.partnerTypesForm = this.fb.group({
            typeShortName: this.fb.control(null),
            typeLongName: this.fb.control(null),
            description: this.fb.control(null)
        })
    }
    savePartnersType(){}
}