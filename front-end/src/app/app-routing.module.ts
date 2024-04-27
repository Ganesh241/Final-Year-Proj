import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CreateBlogComponent } from './components/create-blog/create-blog.component';
import { ShowBlogComponent } from './components/show-blog/show-blog.component';
import { CommentsComponent } from './components/comments/comments.component';
import { authGuard } from './guard/auth.guard';
import { AboutPageComponent } from './components/about-page/about-page.component';
// import { ContactUsComponent } from './components/contact-us/contact-us.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path:'profile',canActivate:[authGuard], component: ProfileComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'home',component:HomePageComponent},
  {path:'create-blog', canActivate:[authGuard],component:CreateBlogComponent},
  {path:'show-blog',component:ShowBlogComponent},
  {path:'show-blog/blog/:blogid',component:ShowBlogComponent},
  {path:'comments',component:CommentsComponent},
  {path:'about-page',component:AboutPageComponent}
  // {path:'contact-us',component:ContactUsComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
