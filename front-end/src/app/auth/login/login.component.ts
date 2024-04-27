import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { UsersService } from 'src/app/_services/users.service';
import { login, Users } from 'src/app/models/users';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  @ViewChild('f') form!: NgForm;
  logi: login = new login();

  constructor(private usersService: UsersService,private router: Router) {}

  // form = new FormGroup({
  //   password: new FormControl('', [Validators.required, this.passwordValidator])
  // });

  userData : Users = new Users();
  onSubmit(form: NgForm) {
    if (form.invalid) {
      alert('Invalid');
    }
    else{
    this.logi.userName = this.form.value.username;
    this.logi.userPass = this.form.value.password;

    // console.log(this.logi.userName);
    this.checklogin();
    navigator
    }
  }

  ngOnInit(): void {
    sessionStorage.removeItem('userid');
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('email' );
    sessionStorage.removeItem('gender');
    sessionStorage.removeItem('proff');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('age');
  }
  isLoggedIn:boolean=false;
  x:any=undefined;
  checklogin() {
    this.usersService.checkuser(this.logi).subscribe((data: boolean) => { this.x=data;
      // console.log(this.x);
      if(this.x){
        sessionStorage.setItem('username', this.logi.userName);
        // alert("logged in");
        this.getudata();
        // this.router.navigate(['/show-blog'])
        this.router.navigate(['/home'])
      }
      else{
        alert("UserName Does not exist");
      }
      
    });
  }


  i:string = "";
  v:any=undefined;
  forSession : Users = new Users();
  getudata(){
    let un = sessionStorage.getItem('username');
    this.usersService.udata(un).subscribe((data)=>{this.v=data;
    // console.log(this.v);
    this.userData = this.v;
    this.i=this.userData.userId.toString();
    sessionStorage.setItem('userid',this.i );
    sessionStorage.setItem('name',this.userData.name );
    sessionStorage.setItem('email',this.userData.userEmail );
    sessionStorage.setItem('gender',this.userData.gender );
    sessionStorage.setItem('proff',this.userData.userProf );
    this.i = this.userData.userAge.toString();
    sessionStorage.setItem('age',this.i );
    });
  }

    // to get id as number
  getId()
  {
    let vl = sessionStorage.getItem('userid')
    // console.log(vl);
    
    let vs = parseInt(vl || '')
    
    if(Number.isNaN(vs))
    return false
    
    else
    return vs;
  }
}
