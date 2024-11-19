import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  posts: any[] = [];

  constructor(private _postService: PostsService) {}

  ngOnInit(): void {
    this._postService.getPosts().subscribe({
      next: (res) => {
        this.posts = res;
        console.log(this.posts);
      },
      error: (err) => {
        console.error('Error fetching posts', err);
      },
    });
  }

  trackByPostId(index: number, post: any): number {
    return post.id;
  }
}
