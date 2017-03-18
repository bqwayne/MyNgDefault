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