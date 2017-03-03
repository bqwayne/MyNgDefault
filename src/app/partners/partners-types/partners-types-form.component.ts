import { Component, OnInit, Input } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { MdDialogRef } from '@angular/material';
import { PartnersService } from '../';


@Component({
    selector: 'app-partner-type-form',
    templateUrl: './partners-types-form.component.html',
    styleUrls: ['./partners-types-form.component.scss']
})


export class PartnersTypeFormComponent implements OnInit {
    @Input('partnersType') partnersType?;
    partnerTypesForm: FormGroup;


    constructor(private fb: FormBuilder, 
                public dialogRef: MdDialogRef<PartnersTypeFormComponent>,
                private partnersservice: PartnersService){}


    ngOnInit() {
        this.buildForm();
    }

    buildForm(){
        this.partnerTypesForm = this.fb.group({
            typeShortName: this.fb.control(null),
            typeLongName: this.fb.control(null),
            description: this.fb.control(null),
            key: this.fb.control(null),
            isEdit: this.fb.control(false)
        })
        if (this.partnersType) {
            this.partnerTypesForm.setValue({
                typeShortName: this.partnersType.typeShortName,
                typeLongName: this.partnersType.typeLongName,
                description: this.partnersType.description,
                key: this.partnersType.$key,
                isEdit: true
            })
        }
    }
    savePartnersType(partnersType){
        if (partnersType.isEdit) {
            this.partnersservice.setPartnersType(partnersType);
        } else {
            this.partnersservice.addPartnersType(partnersType);
        }
    }
}