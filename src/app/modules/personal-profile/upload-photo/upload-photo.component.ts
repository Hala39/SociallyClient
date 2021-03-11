import { IUser } from './../../../models/User';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.scss']
})
export class UploadPhotoComponent implements OnInit {

  @Input() user: IUser;
  constructor() { }

  ngOnInit(): void {
  }

}
