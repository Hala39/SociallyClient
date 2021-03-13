import { IPost } from './Post';
import { IPhoto } from "./Photo";

export interface IAuth {
    value: IUser,
    isSuccess: boolean,
    error: string
}
export interface IUser {
    email?: string,
    password?: string,
    userName?: string,
    token?: string,
    photoUrl?: string,
    coverUrl?: string,
    education?: string,
    work?: string,
    bio?: string,
    address?: string
    posts?: IPost[]
}
