import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comment-add-form',
  templateUrl: './comment-add-form.component.html',
  styleUrls: ['./comment-add-form.component.css']
})

export class CommentAddFormComponent implements OnInit {
  comment = {
    body: null
  };

  @Output() addComment = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onSubmit(commentForm) {
    console.log('onSubmit()', this.comment);
    this.addComment.next(
      //deep copy
      Object.assign({},this.comment)
      );

      //Reset comment body
      this.comment.body =null;
      commentForm.reset();
  }
}
