import { IPhoto } from './Photo';
export interface IPost {
    userName: string,
    photoUrl: string,
    description?: string,
    date: Date,
    photo?: IPhoto
}