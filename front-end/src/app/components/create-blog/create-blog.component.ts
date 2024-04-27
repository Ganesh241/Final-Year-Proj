import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { blogd } from 'src/app/models/create-blog';
import { blog } from 'src/app/models/users';
import { BlogService } from 'src/app/_services/blog.service';
import { UsersService } from 'src/app/_services/users.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent {
  constructor(private usersService: UsersService, private blogService: BlogService,private router: Router) {}

  blog_title: string = '';
  blog_text: string = ``;
  tag: string = '#Technology';

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '50%',
    minHeight: '28rem',
    placeholder: 'Kick your idea',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Italic',
    defaultFontSize: '5',
    sanitize: false,
    width: '100%',
  };

  config1: AngularEditorConfig = {
    editable: false,
    showToolbar: false,
    height: '100rem',
    minHeight: '50%',
  };

  bd: blogd = new blogd();

  uploadImage(event: any) {
    const file = event.target.files[0];
  }

  

  submitblog() {
    let uid = this.blogService.getId();

    if (this.blog_title == '') alert('Title Empty');
    else if (this.blog_text == ``) alert('Write your blog');
    else {
      this.bd.blog_text = this.blog_text;
      this.bd.blog_title = this.blog_title;
      this.bd.likes = 0;
      this.bd.user_id = uid;
      this.bd.views = 0;
      this.bd.tags = this.tag;
      this.saveblog();
    }
  }

  x: any = undefined;
  saveblog() {
    this.blogService.createBlog(this.bd).subscribe((data: boolean) => {
      this.x = data;
      console.log(this.x);
      if(data){
        alert("Successfully Added");
      }
      this.router.navigate(['/home']);
    });
  }
}
