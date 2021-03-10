export interface IAuth {
    value: IUser,
    isSuccess: boolean,
    error: string
}
export interface IUser {
    email?: string,
    password?: string,
    userName?: string,
    token?: string
    education?: string,
    work?: string,
    bio?: string,
    address?: string
}
export interface IMember {
    education?: string,
    work?: string,
    address?: string,
    bio?: string,
    photos?: IPhoto[]
}

export interface IPhoto {
    id: number,
    url: string,
    isMain: boolean
}