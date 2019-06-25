import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsService } from './services/posts.service';
import { MyPipePipe } from './pipes/my-pipe.pipe';

@NgModule({
  declarations: [MyPipePipe],
  imports: [
    CommonModule
  ],
  exports:[
    MyPipePipe
  ],
  providers: [
    PostsService
  ]
})
export class SharedModule { }
