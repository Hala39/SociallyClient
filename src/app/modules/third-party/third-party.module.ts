import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr';
import { FileUploadModule } from 'ng2-file-upload';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NgxSpinnerModule,
    FileUploadModule,
  ], 
  exports: [
    CommonModule,
    FontAwesomeModule,
    NgxSpinnerModule,
    FileUploadModule
  ]
})
export class ThirdPartyModule { }
