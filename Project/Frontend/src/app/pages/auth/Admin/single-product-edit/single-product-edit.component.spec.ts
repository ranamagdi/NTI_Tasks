import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProductEditComponent } from './single-product-edit.component';

describe('SingleProductEditComponent', () => {
  let component: SingleProductEditComponent;
  let fixture: ComponentFixture<SingleProductEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleProductEditComponent]
    });
    fixture = TestBed.createComponent(SingleProductEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
