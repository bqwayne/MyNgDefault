import { Injectable, ModuleWithProviders, OnInit} from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { AuthFire } from '../shared';

@Injectable()
export class PartnersService implements OnInit{
    partnersLocBase: string = 'partnerPortal';
    partnersListLoc: string = this.partnersLocBase + '/partners';
    partnerTypesLoc: string = this.partnersLocBase + '/types';
    partnerLevelsLoc: string = this.partnersLocBase + '/levels';
    competenciesLoc: string = this.partnersLocBase + '/competencies';
    competencyStatusesLoc: string = this.partnersLocBase + '/competencyLevels';
    partnersList: FirebaseListObservable<any[]>;
    partnerTypesList: FirebaseListObservable<any[]>;
    partnerLevelsList: FirebaseListObservable<any[]>;
    competenciesList : FirebaseListObservable<any[]>;
    competencyStatusesList: FirebaseListObservable<any[]>;

    constructor(private af: AuthFire){}

    ngOnInit() {
    }

// Partner Program levels, Partner Types, and competencies

    // Partner Types CRUD
    getPartnersTypes() {
        return this.partnerTypesList = this.af.authFire.database.list(this.partnerTypesLoc);
    }

    setPartnersType(partnerType) {
        this.partnerTypesList = this.af.authFire.database.list(this.partnerTypesLoc);
    }

    addPartnersType(partnerType) {
        let partnerTypeAdd = {
            typeShortName: partnerType.typeShortName,
            typeLongName: partnerType.typeLongName,
            description: partnerType.description,
            createdAt: Date.now(),
            updatedAt: Date.now()
        };
        this.partnerTypesList.push(partnerTypeAdd);
    }

    deletePartnersType(partnerType) {
        this.partnerTypesList = this.af.authFire.database.list(this.partnerTypesLoc);
    }    

    // Partners Levels CRUD
    getPartnersLevels() {
        return this.partnerLevelsList = this.af.authFire.database.list(this.partnerLevelsLoc);
    }

    setPartnersLevel(partnersLevel) {
        this.partnerLevelsList = this.af.authFire.database.list(this.partnerLevelsLoc);
    }

    addPartnersLevel(partnersLevel) {
        this.partnerLevelsList = this.af.authFire.database.list(this.partnerLevelsLoc);
    }

    deletePartnersLevel(partnersLevel) {
        this.partnerLevelsList = this.af.authFire.database.list(this.partnerLevelsLoc);
    }        
    // Competencies CRUD
    getCompetencies() {
        return this.competenciesList = this.af.authFire.database.list(this.competenciesLoc);
    }

    setCompetency(competency) {
        this.competenciesList = this.af.authFire.database.list(this.competenciesLoc);
    }

    addCompetency(competency) {
        this.competenciesList = this.af.authFire.database.list(this.competenciesLoc);
    }

    deleteCompetency(competency) {
        this.competenciesList = this.af.authFire.database.list(this.competenciesLoc);
    }

    // Competency Statuses CRUD
    getCompetencyStatuses(){
        return this.competencyStatusesList = this.af.authFire.database.list(this.competencyStatusesLoc);
    }

    setCompetencyStatus(competencyStatus){
        this.competencyStatusesList = this.af.authFire.database.list(this.competencyStatusesLoc);
    }

    addCompetencyStatus(competencyStatus){
        this.competencyStatusesList = this.af.authFire.database.list(this.competencyStatusesLoc);
    }

    deleteCompetencyStatus(competencyStatus){
        this.competencyStatusesList = this.af.authFire.database.list(this.competencyStatusesLoc);
    }

// Partners and Partner Details
    getPartners() {
        return this.partnersList = this.af.authFire.database.list(this.partnersListLoc);
    }

}