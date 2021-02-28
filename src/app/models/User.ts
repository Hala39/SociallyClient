export interface IUser {
    email: string,
    password: string,
    username?: string
}

export interface IAuthRes {
    token: string,
    image: string,
    username: string
}