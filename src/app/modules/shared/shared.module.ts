import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';



@NgModule({
  declarations: [NavbarComponent, PostComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    PostComponent
  ]
})
export class SharedModule { }
