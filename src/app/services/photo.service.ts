import { IUser } from 'src/app/models/User';
import { UserService } from './user.service';
import { AccountService } from 'src/app/services/account.service';
import { Injectable } from '@angular/core';
import { IPhoto } from '../models/Photo';
import { FileUploader } from 'ng2-file-upload';
import { NewPost } from '../models/NewPost';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  user: IUser;
  uploader: FileUploader;
  hasBaseDropzoneOver: false;
  constructor(private accountService: AccountService, private userService: UserService) { }

  fileOverBase(e: any) {
    this.hasBaseDropzoneOver = e;
  }

  setMainPhoto(photo: IPhoto) {
    this.userService.setMainPhoto(photo.id).subscribe(() => {
      this.user.photoUrl = photo.url;
      this.accountService.setCurrentUser(this.user);
    })
  } 

  deletePhoto(photoId: number) {
    this.userService.deletePhoto(photoId).subscribe(() => {
      this.user.posts = this.user.posts.filter(x => x.photo.id !== photoId);
    })
  }

  initializeUploader() {
    this.uploader = new FileUploader({
      url: this.baseUrl + 'user/add-photo',
      authToken: 'Bearer ' + this.user.token,
      isHTML5: true,
      allowedFileType: ['image'],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 10 * 1024 * 1024
    });

    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    }

    this.uploader.onSuccessItem = (item, response, status, headers) => {
      if (response) {
        const photo: IPhoto = JSON.parse(response);
          var post = new NewPost
          {
            post.description = this.description.value !== null? this.description.value : null,
            post.photoId = photo.id
          };

        this.postService.addPost(post);
      }
    }
  }
}
