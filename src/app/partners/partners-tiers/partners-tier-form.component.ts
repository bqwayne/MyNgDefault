import { Component, OnInit, Input } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { MdDialogRef } from '@angular/material';
import { PartnersService } from '../';

@Component({
    selector: 'app-partners-tier-form',
    templateUrl: './partners-tier-form.component.html',
    styleUrls: ['./partners-tier-form.component.scss']
})


export class PartnersTierFormComponent implements OnInit {
    @Input('partnersTier') partnersTier?;
    partnersTierForm: FormGroup;


    constructor(private fb: FormBuilder, 
                public dialogRef: MdDialogRef<PartnersTierFormComponent>,
                private partnersservice: PartnersService){}


    ngOnInit() {
        this.buildForm();
    }
    buildForm(){
        this.partnersTierForm = this.fb.group({
            tierName: this.fb.control(null),
            description: this.fb.control(null),
            shortDesc: this.fb.control(null),
            key: this.fb.control(null),
            isEdit: this.fb.control(false)
        })
        if (this.partnersTier) {
            this.partnersTierForm.setValue({
                tierName: this.partnersTier.tierName,
                description: this.partnersTier.description,
                shortDesc: (this.partnersTier.shortDesc) ? this.partnersTier.shortDesc : '',
                key: this.partnersTier.$key,
                isEdit: true
            })
        }
    }

    savePartnersTier(partnersTier){
        if (partnersTier.isEdit) {
            this.partnersservice.setPartnersTier(partnersTier);
        } else {
            this.partnersservice.addPartnersTier(partnersTier);
        }
    }        
}