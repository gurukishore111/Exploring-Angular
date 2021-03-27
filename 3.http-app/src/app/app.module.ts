import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';
import { HttpClientModule } from '@angular/common/http';
import { PostFormComponent } from './post-form/post-form.component';

@NgModule({
  declarations: [AppComponent, UserComponent, NavbarComponent, PostsComponent, PostFormComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [UserService, PostService],
  bootstrap: [AppComponent],
})
export class AppModule {}
