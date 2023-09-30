import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookeryComponent } from './cookery.component';

describe('CookeryComponent', () => {
  let component: CookeryComponent;
  let fixture: ComponentFixture<CookeryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CookeryComponent]
    });
    fixture = TestBed.createComponent(CookeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
