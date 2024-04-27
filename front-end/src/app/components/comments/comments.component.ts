import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CommentServiceService } from 'src/app/_services/comment-service.service';
import { Comments } from 'src/app/models/comments';
import { DatePipe, NgFor } from '@angular/common';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor(private commentService: CommentServiceService, private router: Router) { }
  comment: Comments = new Comments();
  uidString: any;
  useridInt!: number;
  newCommentText: string = "";
  isLoggedIn: boolean = false;
  today!: Date;
  changedDate: any;
  pipe = new DatePipe('en-US');
  ngOnInit() {
    this.isLoggedIn = this.checkLogin();
    this.getComment();
  }

  //get list of comments form the blog id
  comments: Comments[] = []
  x: Comments[] = []
  blogid: number = 2;
  getComment() {

    this.commentService.getComments(this.blogid).subscribe((data: Comments[]) => {
      this.x = data;
      for (let i of this.x) {
        this.comments.push(i);
      }
    })
    // console.log(this.comments); 
  }
  checkLogin() {
    this.uidString = sessionStorage.getItem('userid');
    this.useridInt = parseInt(this.uidString || '');
    if (this.useridInt)
      return true;
    else
      return false;
  }
  changeFormat(today: Date) {
    let ChangedFormat = this.pipe.transform(this.today, 'YYYY-MM-dd');
    this.changedDate = ChangedFormat;
    console.log(this.changedDate);
  }
  addComment() {
    if (this.checkLogin()) {
      this.comment.user_id = this.useridInt,
        this.comment.comment = this.newCommentText,
        this.today = new Date();
      this.changeFormat(this.today);
      this.comment.date = this.changedDate,
        this.comment.blog_id = 2
      this.commentService.addCommet(this.comment).subscribe((data) => {
        console.log(data);

      },
        (error) => console.log(error));
    }
    else {
      alert("Login to comment");
    }
  }

}
