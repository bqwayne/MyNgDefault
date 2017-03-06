import { Injectable, ModuleWithProviders, OnInit} from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { AuthFire } from '../shared';

@Injectable()
export class PartnersService implements OnInit{
    partnersLocBase: string = 'partnerPortal';
    partnersListLoc: string = this.partnersLocBase + '/partners';
    partnerTypesLoc: string = this.partnersLocBase + '/partnerTypes';
    partnerTiersLoc: string = this.partnersLocBase + '/partnerTiers';
    competenciesLoc: string = this.partnersLocBase + '/competencies';
    competencyLevelsLoc: string = this.partnersLocBase + '/competencyLevels';
    partnersList: FirebaseListObservable<any[]>;
    partnerTypesList: FirebaseListObservable<any[]>;
    partnerTiersList: FirebaseListObservable<any[]>;
    competenciesList : FirebaseListObservable<any[]>;
    competencyLevelsList: FirebaseListObservable<any[]>;

    constructor(private af: AuthFire){}

    ngOnInit() {
    }

// Partner Program Tiers, Partner Types, and competencies

    // Partner Types CRUD
    getPartnersTypes() {
        return this.partnerTypesList = this.af.authFire.database.list(this.partnerTypesLoc);
    }

    setPartnersType(partnerType) {
        let partnerTypeEdit = {
            typeShortName: partnerType.typeShortName,
            typeLongName: partnerType.typeLongName,
            description: partnerType.description,
            updatedAt: Date.now()
        }
        this.partnerTypesList.update(partnerType.key, partnerTypeEdit);
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

    deletePartnersType(key) {
        this.partnerTypesList.remove(key);
    }

    getPartnerTypeById(key) {
        return this.af.authFire.database.object(this.partnerTypesLoc + '/' + key)
    }

    // Partners Tiers CRUD
    getPartnersTiers() {
        return this.partnerTiersList = this.af.authFire.database.list(this.partnerTiersLoc);
    }

    setPartnersTier(partnersTier) {
        let partnersTierEdit = {
            tierName: partnersTier.tierName,
            description: partnersTier.description,
            shortDesc: partnersTier.shortDesc,
            updatedAt: Date.now()
        }
        this.partnerTiersList.update(partnersTier.key, partnersTierEdit);
    }

    addPartnersTier(partnersTier) {
        let partnersTierAdd = {
            tierName: partnersTier.tierName,
            description: partnersTier.description,
            shortDesc: partnersTier.shortDesc,
            createdAt: Date.now(),
            updatedAt: Date.now()
        };
        this.partnerTiersList.push(partnersTierAdd);
    }

    deletePartnersTier(key) {
        this.partnerTiersList.remove(key);
    }

    getPartnerTierById(key){
        return this.af.authFire.database.object(this.partnerTiersLoc + '/' + key);
    }
    // Competencies CRUD
    getCompetencies() {
        return this.competenciesList = this.af.authFire.database.list(this.competenciesLoc);
    }

    setCompetency(competency) {
        let competencyEdit = {
            competencyName: competency.competencyName,
            description: competency.description,
            shortDesc: competency.shortDesc,
            updatedAt: Date.now()
        }
        this.competenciesList.update(competency.key, competencyEdit);
    }

    addCompetency(competency) {
        let competencyAdd = {
            competencyName: competency.competencyName,
            description: competency.description,
            shortDesc: competency.shortDesc,
            createdAt: Date.now(),
            updatedAt: Date.now()
        };
        this.competenciesList.push(competencyAdd);
    }

    deleteCompetency(key) {
        this.competenciesList.remove(key);
    }

    // Competency Levels CRUD
    getCompetencyLevels(){
        return this.competencyLevelsList = this.af.authFire.database.list(this.competencyLevelsLoc);
    }

    setCompetencyLevel(competencyLevel){
        let competencyLevelEdit = {
            competencyLevelName: competencyLevel.competencyLevelName,
            description: competencyLevel.description,
            shortDesc: competencyLevel.shortDesc,
            updatedAt: Date.now()
        }
        this.competencyLevelsList.update(competencyLevel.key, competencyLevelEdit);
    }

    addCompetencyLevel(competencyLevel){
        let competencyLevelAdd = {
            competencyLevelName: competencyLevel.competencyLevelName,
            description: competencyLevel.description,
            shortDesc: competencyLevel.shortDesc,
            createdAt: Date.now(),
            updatedAt: Date.now()
        };
        this.competencyLevelsList.push(competencyLevelAdd);
    }

    deleteCompetencyLevel(key){
        this.competencyLevelsList.remove(key);
    }

// Partners and Partner Details
    getPartners() {
        return this.partnersList = this.af.authFire.database.list(this.partnersListLoc);
    }

    getPartnerById(key) {
        return this.af.authFire.database.list(this.partnersListLoc + "/" + key);
    }

    setPartner(partner) {
        let partnerEdit = {
            partnerName: partner.partnerName,
            partnerType: partner.partnerType,
            partnerTier: partner.partnerTier,
            updatedAt: Date.now()
        }
        this.partnersList.update(partner.key, partnerEdit);
    }

    addPartner(partner) {
        let partnerAdd = {
            partnerName: partner.partnerName,
            partnerType: partner.partnerType,
            partnerTier: partner.partnerTier,
            createdAt: Date.now(),
            updatedAt: Date.now()
        };
        this.partnersList.push(partnerAdd);        

    }

    deletePartner(key) {
        this.partnersList.remove(key);
    }

}