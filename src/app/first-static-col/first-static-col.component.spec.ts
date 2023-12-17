import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstStaticColComponent } from './first-static-col.component';

describe('FirstStaticColComponent', () => {
  let component: FirstStaticColComponent;
  let fixture: ComponentFixture<FirstStaticColComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstStaticColComponent]
    });
    fixture = TestBed.createComponent(FirstStaticColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
