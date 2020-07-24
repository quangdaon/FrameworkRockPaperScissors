import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorHandComponent } from './selector-hand.component';

describe('SelectorHandComponent', () => {
  let component: SelectorHandComponent;
  let fixture: ComponentFixture<SelectorHandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorHandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorHandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
