import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';
import { AppComponent } from '../core/components/app/app.component';
import { MenuComponent } from '../core/components/menu/menu.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { PostsModule } from '../posts/posts.module';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { PostListComponent } from '../posts/components/post-list/post-list.component';
import { PostListItemComponent } from '../posts/components/post-list-item/post-list-item.component';
import { PostAddFormComponent } from '../posts/components/post-add-form/post-add-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomePageComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    CoreRoutingModule,
    PostsModule,
    SharedModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class CoreModule { }
