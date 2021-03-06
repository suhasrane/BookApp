import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBooksComponent } from './admin-books.component';

describe('AdminBooksComponent', () => {
  let component: AdminBooksComponent;
  let fixture: ComponentFixture<AdminBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
