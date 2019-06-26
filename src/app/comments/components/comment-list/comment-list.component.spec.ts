import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentListComponent } from './comment-list.component';
import { ICommentListItem } from 'src/app/shared/interfaces/comment-list-item.interface';

describe('CommentListComponent', () => {
  let component: CommentListComponent;
  let fixture: ComponentFixture<CommentListComponent>;
  let $component: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentListComponent);
    component = fixture.componentInstance;
    $component = fixture.nativeElement;
    fixture.detectChanges();
  });
  afterEach(() =>{
    $component.remove();
  })


  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display list of comments', () => {
    component.comments=[
      {id: '88sdf7dsf'} as ICommentListItem,
      {id: 'xfgsfg7sf'} as ICommentListItem,
    ]
    const $comments =$component.querySelectorAll('app-comments-list-item');
    expect($comments.length).toBeGreaterThan(0);
  });
});
