export interface IUserDetails { 
        id: string,
        name: string,
        email: string,
        password: string,
        admin: boolean
}

export interface IUsers {
    users: Array<IUserDetails>
}

export interface IPartnerDetails {
    id: string,
    partnername: string
}
export interface IPartners {
    partners: Array<IPartnerDetails>
}

export interface IPartnerTypeDetails {
    id: number,
    typeshortname: string,
    typelongname: string,
    description: string
}

export interface IPartnerTypes {
    partnerTypes: Array<IPartnerDetails>
}

export interface IPartnerTierDetails {
    id: number,
    tiername: string,
    shortdesc: string,
    description: string
}

export interface IPartnerTiers {
    partnerTiers: Array<IPartnerTierDetails>
}

export interface ICompetencyDetails {
    id: number,
    competencyname: string,
    shortdesc: string,
    description: string
}

export interface ICompetencies {
    competencies: Array<ICompetencyDetails>
}

export interface ICompetencyLevelDetails {
    id: number,
    competencylevelname: string,
    shortdesc: string,
    description: string
}

export interface ICompetencyLevels {
    competencyLevels: Array<ICompetencyLevelDetails>
}