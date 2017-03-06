import { Component, OnInit, Input } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { MdDialogRef } from '@angular/material';
import { FirebaseListObservable } from 'angularfire2';
import { PartnersService } from '../';


@Component({
    selector: 'app-partner-list-form',
    templateUrl: './partner-list-form.component.html',
    styleUrls: ['./partner-list-form.component.scss']
})


export class PartnersListFormComponent implements OnInit {
    @Input('partner') partner?;
    partnerForm: FormGroup;
    partnerTypeList: FirebaseListObservable<any[]>;
    partnerTierList: FirebaseListObservable<any[]>;


    constructor(private fb: FormBuilder, 
                public dialogRef: MdDialogRef<PartnersListFormComponent>,
                private partnersservice: PartnersService){}


    ngOnInit() {
        this.buildForm();
        this.partnerTypeList = this.partnersservice.getPartnersTypes();
        this.partnerTierList = this.partnersservice.getPartnersTiers();
    }

    buildForm(){
        this.partnerForm = this.fb.group({
            partnerName: this.fb.control(null),
            partnerType: this.fb.control(null),
            partnerTier: this.fb.control(null),
            key: this.fb.control(null),
            isEdit: this.fb.control(false)
        })
        if (this.partner) {
            this.partnerForm.setValue({
                partnerName: this.partner.partnerName,
                partnerType: this.partner.partnerType,
                partnerTier: this.partner.partnerTier,
                key: this.partner.$key,
                isEdit: true
            })
        }
    }

    savePartner(partner){
        if (partner.isEdit) {
            this.partnersservice.setPartner(partner);
        } else {
            this.partnersservice.addPartner(partner);
        }
    }
}