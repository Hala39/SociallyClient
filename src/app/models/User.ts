export interface IUser {
    email: string,
    password: string,
    username?: string
}

export interface IAuthRes {
    value: string,
    isSuccess: boolean,
    message: string
}