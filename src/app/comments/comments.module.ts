import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentAddFormComponent } from './components/comment-add-form/comment-add-form.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { CommentListItemComponent } from './components/comment-list-item/comment-list-item.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    CommentAddFormComponent, 
    CommentListComponent, 
    CommentListItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    CommentAddFormComponent, 
    CommentListComponent, 
    CommentListItemComponent
  ]
})
export class CommentsModule { }
