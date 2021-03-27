import { Component, OnInit } from '@angular/core';
import { Post } from './../models/Post';
import { PostService } from './../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: Post[];
  currentpost: Post = {
    id: 0,
    title: '',
    body: '',
  };
  isEdit: boolean = false;
  constructor(private postservice: PostService) {}

  ngOnInit(): void {
    this.postservice.getPost().subscribe((post) => {
      this.posts = post;
    });
  }

  onNewPost(post: Post) {
    this.posts.unshift(post);
  }

  editPost(post: Post) {
    this.currentpost = post;
    this.isEdit = true;
  }

  onUpadatedPost(post: Post) {
    this.posts.forEach((curr, index) => {
      if (post.id === curr.id) {
        this.posts.splice(index, 1);
        this.posts.unshift(post);
        this.isEdit = false;
        this.currentpost = {
          id: 0,
          title: '',
          body: '',
        };
      }
    });
  }

  removePost(post: Post) {
    if (confirm('Are you sure to remove ? ')) {
      this.postservice.removePost(post.id).subscribe(() => {
        this.posts.forEach((curr, index) => {
          if (post.id === curr.id) {
            this.posts.splice(index, 1);
            this.posts.unshift(post);
            this.isEdit = false;
            this.currentpost = {
              id: 0,
              title: '',
              body: '',
            };
          }
        });
      });
    }
  }
}
