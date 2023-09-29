import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSingleUserComponent } from './show-single-user.component';

describe('ShowSingleUserComponent', () => {
  let component: ShowSingleUserComponent;
  let fixture: ComponentFixture<ShowSingleUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowSingleUserComponent]
    });
    fixture = TestBed.createComponent(ShowSingleUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
