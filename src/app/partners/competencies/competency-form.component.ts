import { Component, OnInit, Input } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { MdDialogRef } from '@angular/material';
import { PartnersService } from '../';


@Component({
    selector: 'app-competency-form',
    templateUrl: './competency-form.component.html',
    styleUrls: ['./competency-form.component.scss']
})


export class CompetencyFormComponent implements OnInit {
    @Input('competency') competency?;
    competencyForm: FormGroup;

    constructor(private fb: FormBuilder, 
                public dialogRef: MdDialogRef<CompetencyFormComponent>,
                private partnersservice: PartnersService){}


    ngOnInit() {
        this.buildForm();
    }
    buildForm(){
        this.competencyForm = this.fb.group({
            competencyName: this.fb.control(null),
            description: this.fb.control(null),
            shortDesc: this.fb.control(null),
            key: this.fb.control(null),
            isEdit: this.fb.control(false)
        })
        if (this.competency) {
            this.competencyForm.setValue({
                competencyName: this.competency.competencyName,
                description: this.competency.description,
                shortDesc: (this.competency.shortDesc) ? this.competency.shortDesc : '',
                key: this.competency.$key,
                isEdit: true
            })
        }
    }

    saveCompetency(competency){
        if (competency.isEdit) {
            this.partnersservice.setCompetency(competency);
        } else {
            this.partnersservice.addCompetency(competency);
        }
    }        
}