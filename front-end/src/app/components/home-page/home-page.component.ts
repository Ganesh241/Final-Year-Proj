import { Component, OnInit } from '@angular/core';
import { blog } from 'src/app/models/users';
import { BlogService } from 'src/app/_services/blog.service';
import { UsersService } from 'src/app/_services/users.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent{


  public p = 1;
  constructor(private blogService : BlogService){}
  clickedTag : string = "";
  // ngOnInit(): void {
  //   console.log(tag);
  // }
  sendTag(value:string){
    this.clickedTag = value;
  }
    arr:String [] = ["hee", "helo","h"];
    blogs : blog[] = [];
    count : number = 16;
    maxNo : number=0;
    pageNo:number = 1;
    pages : number[] = [];
    

    // stripHtmlTags(html: string): string {
    //   return html.replace(/<[^>]*>/g, '');
    // }
    

    nextPage(){
      // console.log("next");
      this.blogService.setPage(this.blogService.getPage() + 1);
      this.p = this.blogService.getPage();
      console.log(this.blogService.getPage());
    }

    // setVal(){
    //   this.maxNo = this.count/10;
    //   for(let i =1;i<=this.maxNo+1;i++){
    //     this.pages.push(i);
    //   }  
    // }

    prevPage(){
      BlogService.total = 1;
      this.blogService.setPage(this.blogService.getPage()-1);
      this.p = this.blogService.getPage();
      console.log(this.p);
    }
  }
