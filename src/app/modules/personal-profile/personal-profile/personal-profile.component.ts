import { AccountService } from './../../../services/account.service';
import { IPost } from './../../../models/Post';
import { PostService } from './../../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { faHouseUser, faGraduationCap, faBriefcase, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { IUser } from 'src/app/models/User';
import { ReplaySubject } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-personal-profile',
  templateUrl: './personal-profile.component.html',
  styleUrls: ['./personal-profile.component.scss']
})
export class PersonalProfileComponent implements OnInit {
  user: IUser;
  posts: IPost[];

  faHouseUser = faHouseUser;
  faGraduationCap = faGraduationCap;
  faBriefCase = faBriefcase;
  faQuoteLeft = faQuoteLeft;

  constructor(private postService: PostService, private accountService: AccountService) {
    this.postService.posts$.pipe(take(1)).subscribe(posts => this.posts = posts);

  }

  ngOnInit(): void {
    this.loadUser();
  }
  
  loadUser() {
    this.user = JSON.parse(localStorage.getItem('user'));
    if(this.user === null) {
      this.accountService.currentUser$.pipe(take(1)).subscribe(user => this.user = user);
    }
  }

  loadPosts() {
    this.posts = JSON.parse(localStorage.getItem('user_posts'));
  }

}
