import { UUID } from 'angular2-uuid';

export class NewPost {
    description?: string;
    id: string = UUID.UUID();
    photoId: number
}

