import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorHandComponent } from './selector-hand.component';
import { SelectorComponent } from '../selector/selector.component';
import { Component } from '@angular/core';
import hands, { Hand, SelectableHand } from 'src/app/data/hands';

describe('SelectorHandComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  const hand: SelectableHand = {
    ...hands.rock,
    disabled: false,
    selected: false
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorHandComponent, TestHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  

  @Component({
    selector: `host-component`,
    template: `<app-selector-hand [hand]="hand"></app-selector-hand>`
  })
  class TestHostComponent {
    hand: SelectableHand = hand
  }
});
