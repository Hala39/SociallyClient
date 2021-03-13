import { PostService } from './../../../services/post.service';
import { NewPost } from './../../../models/NewPost';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { faBan, faPlus, faTrash, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FileUploader } from 'ng2-file-upload';
import { take } from 'rxjs/operators';
import { IUser } from 'src/app/models/User';
import { AccountService } from 'src/app/services/account.service';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';
import { IPhoto } from 'src/app/models/Photo';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  faPlus = faPlus;
  faUpload = faUpload;
  faBan = faBan;
  faTrash = faTrash;

  uploader: FileUploader;
  hasBaseDropzoneOver = false;
  baseUrl = environment.apiUrl;
  @Input() user: IUser;

  constructor(private accountService: AccountService, private userService: UserService, private fb: FormBuilder, private postService: PostService) { 
    this.accountService.currentUser$.pipe(take(1)).subscribe(user => this.user = user);
  }

  ngOnInit(): void {
    this.initializeUploader();
    this.build();
  }

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

  form: FormGroup;
  description = new FormControl('');
  
  build() {
    this.form = this.fb.group({
      description: this.description
    });
  }

  save() {
    this.uploader.uploadAll();
  }
}
