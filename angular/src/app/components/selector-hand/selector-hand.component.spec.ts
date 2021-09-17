import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorHandComponent } from './selector-hand.component';
import hands, { Hand } from '@shared/helpers/hands';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('SelectorHandComponent', () => {
  let component: SelectorHandComponent;
  let fixture: ComponentFixture<SelectorHandComponent>;
  const hand: Hand = hands.rock;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectorHandComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorHandComponent);
    component = fixture.componentInstance;
    component.hand = hand;
    component.disabled = false;
    component.selected = false;
    fixture.detectChanges();

    spyOn(component.selection, 'emit');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('selectHand', () => {
    it('should emit "selection" with hand', () => {
      component.selectHand();
      expect(component.selection.emit).toHaveBeenCalledWith(hands.rock);
    });

    it('should not emit "selection" when disabled', () => {
      component.disabled = true;
      component.selectHand();
      expect(component.selection.emit).not.toHaveBeenCalled();
    });

    it('should not emit "selection" when selected', () => {
      component.selected = true;
      component.selectHand();
      expect(component.selection.emit).not.toHaveBeenCalled();
    });
  });

  describe('classes', () => {
    it('should have "select-hand" and "selector-hand-{type}" by default', () => {
      const classes = component.getClasses();

      expect(classes['selector-hand']).toBeTrue();
      expect(classes['selector-hand-rock']).toBeTrue();
    });

    it('should not have "disabled" by default', () => {
      const classes = component.getClasses();
      expect(classes['disabled']).toBeFalse();
    });

    it('should not have "selected" by default', () => {
      const classes = component.getClasses();
      expect(classes['selected']).toBeFalse();
    });

    it('should have "disabled" when component is disabled', () => {
      component.disabled = true;
      const classes = component.getClasses();

      expect(classes['disabled']).toBeTrue();
    });

    it('should have "selected" when component is selected', () => {
      component.selected = true;
      const classes = component.getClasses();

      expect(classes['selected']).toBeTrue();
    });
  });
});
