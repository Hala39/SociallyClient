import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ActionsComponent } from './actions/actions.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { PostCardComponent } from './post-card/post-card.component';
import { BioComponent } from './bio/bio.component';
import { AddPostComponent } from './add-post/add-post.component';



@NgModule({
  declarations: [NavbarComponent, PostComponent, PostCardComponent, ActionsComponent, BioComponent, AddPostComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    PostComponent,
    PostCardComponent,
    ActionsComponent,
    RouterModule,
    BioComponent
  ]
})
export class SharedModule { }
