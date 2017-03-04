import { Component, OnInit, Input } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { MdDialogRef } from '@angular/material';
import { PartnersService } from '../';


@Component({
    selector: 'app-competency-level-form',
    templateUrl: './competency-level-form.component.html',
    styleUrls: ['./competency-level-form.component.scss']
})


export class CompetencyLevelFormComponent implements OnInit {
    @Input('competencyLevel') competencyLevel?;
    competencyLevelForm: FormGroup;

    constructor(private fb: FormBuilder, 
                public dialogRef: MdDialogRef<CompetencyLevelFormComponent>,
                private partnersservice: PartnersService){}


    ngOnInit() {
        this.buildForm();
    }
    buildForm(){
        this.competencyLevelForm = this.fb.group({
            competencyLevelName: this.fb.control(null),
            description: this.fb.control(null),
            shortDesc: this.fb.control(null),
            key: this.fb.control(null),
            isEdit: this.fb.control(false)
        })
        if (this.competencyLevel) {
            this.competencyLevelForm.setValue({
                competencyLevelName: this.competencyLevel.competencyLevelName,
                description: this.competencyLevel.description,
                shortDesc: (this.competencyLevel.shortDesc) ? this.competencyLevel.shortDesc : '',
                key: this.competencyLevel.$key,
                isEdit: true
            })
        }
    }

    saveCompetencyLevel(competencyLevel){
        if (competencyLevel.isEdit) {
            this.partnersservice.setCompetencyLevel(competencyLevel);
        } else {
            this.partnersservice.addCompetencyLevel(competencyLevel);
        }
    }        
}