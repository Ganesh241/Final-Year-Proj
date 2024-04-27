import { Component , NgModule, OnInit} from '@angular/core';
import { blog } from '../models/users';
import { UsersService } from '../_services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  userName=sessionStorage.getItem('name');
  userBio:String="Passionate about coding and sharing knowledge!";

  uidString = sessionStorage.getItem('userid')
  useridInt = parseInt(this.uidString || '')

  arr: blog[] = [];

  constructor(private usersService: UsersService,private router: Router) {
  }
  ngOnInit(){
    this.fblog();
  }
  x:blog[]=[];
  fblog() {
    
    this.usersService.blogData().subscribe((data: blog[]) => {
      this.x=data;
      for(let i of this.x)
      {
        this.arr.push(i);
      }
      // console.log(this.x);
      
    });

    console.log(this.arr);
    
  }

  clearUserData(){
    sessionStorage.clear();
  }

  stripHtmlTags(html: string): string {
    return html.replace(/<[^>]*>/g, '');
  }
  //  goToShowBlog(a: number){
  //   console.log("blog id is : "+a);
    
  //   this.router.navigate(['/show-blog/blog',a]);
  // }

}
