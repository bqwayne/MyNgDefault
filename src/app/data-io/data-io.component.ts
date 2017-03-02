import { Component, OnInit } from '@angular/core';
import { DataIoService, IData, DataIoFormComponent } from './';


@Component({
    selector: 'data-io',
    templateUrl: './data-io.component.html',
    styleUrls: ['./data-io.component.scss']
})


export class DataIoComponent implements OnInit {
    _showForm: boolean;
    dataItems: IData[];


    constructor(private dio: DataIoService){}


    ngOnInit() {
       this.dio.getDataItems().subscribe(response => this.dataItems = response);
       this._showForm = false;
    }
    toggleForm(){
        this._showForm = !this._showForm;
    }
}