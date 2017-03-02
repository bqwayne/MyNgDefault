import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { DataIoComponent, DataIoService } from './';


@Component({
    selector: 'data-io-form',
    templateUrl: './data-io-form.component.html',
    styleUrls: ['./data-io-form.component.scss']
})


export class DataIoFormComponent implements OnInit {
    dataIoForm: FormGroup;


    constructor(private fb: FormBuilder,
                private dioComponent: DataIoComponent,
                private dio: DataIoService,
                private route: Router){}


    ngOnInit() {
        this.dataIoForm = this.fb.group({
            menuName: this.fb.control(null),
            menuType: this.fb.control(null)
        });
    }

    cancel() {
        this.dioComponent._showForm = false;
    }
    submit(data){
        console.log(data.value);
        this.dio.putDataItem(data.value);
        this.dioComponent._showForm = false;
    }
}