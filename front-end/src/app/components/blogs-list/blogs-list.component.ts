import { Component, Input, SimpleChanges } from '@angular/core';
import { blog } from 'src/app/models/users';
import { UsersService } from 'src/app/_services/users.service';
import { BlogService } from 'src/app/_services/blog.service';

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.css']
})
export class BlogsListComponent {

  @Input() public page = 1;
  @Input() public tag = "";
  constructor(private blogService: BlogService, private usersService: UsersService) { }
  tagsarr: blog[] = [];    // to use in display blog by tag
  x: blog[] = [];          // to use in display blog by tag

  blogs: blog[] = [];  // to use in All blog display
  flag: boolean = true;  // Flag to check blog is present or not blog
  ngOnInit(): void {
    this.myBlogs();
  }

  stripHtmlTags(html: string): string {
    return html.replace(/<[^>]*>/g, '');
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes);
      // if(changes['tag'])
      if (this.tag != "") {
        console.log(this.tag);
        console.log("tag has clicked");
        this.tagHasClicked(this.tag);
        return;
      }
      if(changes['page'].firstChange) return;
      this.myBlogs();
      
  }

  myBlogs(){
    this.blogService.nextPage(this.blogService.getPage()).subscribe((d : blog[])=>{
      
      console.log(d);
      this.blogs = d;
      if (this.blogs.length == 0) {
        this.flag = false;
        BlogService.total = 0;
      }
      else {
        this.flag = true;
      }
    })
  }

  tagHasClicked(tag: string) {
    this.tagsarr = []
    this.usersService.getByTags(tag).subscribe((data: blog[]) => {
      this.x = data;
      for (let i of this.x) {
        this.tagsarr.push(i);
      }
      if(this.tagsarr.length == 0) {
        this.flag = false;
      }
      else{
        this.flag = true;
      }
    });
    console.log(this.tagsarr);
    this.blogs = this.tagsarr;
  }
}
