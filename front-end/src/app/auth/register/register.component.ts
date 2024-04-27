import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
// import { Users } from 'src/app/models/users';
import { UsersService } from 'src/app/_services/users.service';
import { Users } from 'src/app/models/users';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @ViewChild('f') form!: NgForm;
  genders = ['male', 'female'];

  userData: Users = new Users();

  constructor(private usersService: UsersService, private router: Router) { }

  x: any = undefined;
  saveUsers() {
    this.usersService.createUser(this.userData).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => console.log(error)
    );
  }

  ck: number = 0;

  check() {
    this.usersService.checkuname(this.userData).subscribe((data: boolean) => {
      this.x = data;
      // console.log(this.x);
      if (!this.x)
        alert("UserName is Taken");
      else {
        this.saveUsers();
        this.s = 1;
        this.loginroute();
      }

    });
  }

  loginroute() {
    this.router.navigate(['login']);
  }
  s: number = 0;


  onSubmit(form: NgForm) {
    if (form.invalid) {
      alert('Invalid');
    } else {
      this.userData.name = this.form.value.name;
      this.userData.gender = this.form.value.gender;
      this.userData.userName = this.form.value.userName;
      this.userData.userEmail = this.form.value.userEmail;
      this.userData.userPass = this.form.value.userPass;
      this.userData.userProf = this.form.value.userProf;
      this.userData.userAge = this.form.value.userAge;

      this.check();
      this.s = 0;
    }
  }
}
