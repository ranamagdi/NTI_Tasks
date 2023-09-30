import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSingleProductComponent } from './show-single-product.component';

describe('ShowSingleProductComponent', () => {
  let component: ShowSingleProductComponent;
  let fixture: ComponentFixture<ShowSingleProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowSingleProductComponent]
    });
    fixture = TestBed.createComponent(ShowSingleProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
