import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransHistoryComponent } from './trans-history.component';

describe('TransHistoryComponent', () => {
  let component: TransHistoryComponent;
  let fixture: ComponentFixture<TransHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransHistoryComponent]
    });
    fixture = TestBed.createComponent(TransHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
