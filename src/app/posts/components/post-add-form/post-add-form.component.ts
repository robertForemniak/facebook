import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { uuid } from 'uuid';

@Component({
  selector: 'app-post-add-form',
  templateUrl: './post-add-form.component.html',
  styleUrls: ['./post-add-form.component.css']
})
export class PostAddFormComponent implements OnInit {
  @Output() addPost = new EventEmitter();

  addPostForm = new FormGroup({
    body: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }
  get body() {
    return this.body.addPostForm.get('post');
  }
  onSubmit() {
    const fields = this.addPostForm.getRawValue();
    fields.author = uuid();
    fields.author = {
      id: 'uuid',
      name: "Cos",
      avatar_url: 'http://placeskull.com/50/50/E4317F'
    };
    fields.created_time = new Date().toUTCString();
    fields.image =[
      'https://placekitten.com/408/287'
    ]
    this.addPost.next(
      Object.assign({}, fields));
  }
}
