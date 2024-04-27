import { Component , Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/_services/users.service';
import { AppComponent } from 'src/app/app.component';
import { blog } from 'src/app/models/users';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

@Output() childEvent = new EventEmitter();

  constructor(private usersService: UsersService,private router: Router){}
tags:string[]=["Java","Mythology","AI","Entertainment","Technology","Chess","SQL","JPA"];

tagsarr:blog[]=[];
x:blog[]=[];


tagClicked(tag:string){
  this.childEvent.emit(tag);
}


// tagClicked(tag:string)
// {this.tagsarr=[]
//   this.usersService.getByTags(tag).subscribe((data:blog[])=>{
//     this.x=data;
//     for(let i of this.x)
//     {
//       this.tagsarr.push(i);
//     }
//   });
//   console.log(this.tagsarr);
  
// }

}
