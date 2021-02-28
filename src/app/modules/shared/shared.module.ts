import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ActionsComponent } from './actions/actions.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { PostCardComponent } from './post-card/post-card.component';
import { BioComponent } from './bio/bio.component';



@NgModule({
  declarations: [NavbarComponent, PostComponent, PostCardComponent, ActionsComponent, BioComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    NavbarComponent,
    PostComponent,
    PostCardComponent,
    ActionsComponent,
    BioComponent
  ]
})
export class SharedModule { }
