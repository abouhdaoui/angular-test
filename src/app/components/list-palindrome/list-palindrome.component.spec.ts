import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPalindromeComponent } from './list-palindrome.component';

describe('ListPalindromeComponent', () => {
  let component: ListPalindromeComponent;
  let fixture: ComponentFixture<ListPalindromeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPalindromeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPalindromeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
