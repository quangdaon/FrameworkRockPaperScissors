import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorComponent } from './selector.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import hands from '@shared/helpers/hands';

describe('SelectorComponent', () => {
  let component: SelectorComponent;
  let fixture: ComponentFixture<SelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectorComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorComponent);
    component = fixture.componentInstance;
    component.slow = true;
    fixture.detectChanges();

    spyOn(component.selection, 'emit');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize options from hands object', () => {
    expect(component.options).toEqual(Object.values(hands));
  });

  it('should contain "app-selector-hand" components for each hand option', () => {
    const handElements = fixture.nativeElement.querySelectorAll('app-selector-hand');
    expect(handElements.length).toBe(component.options.length);
  });

  describe('reset', () => {
    it('should clear selected', () => {
      component.selected = hands.rock;
      component.reset();

      expect(component.selected).toBeNull();
    });
  });

  describe('selectHand', () => {
    it('should set "selected" value', () => {
      component.selectHand(hands.rock);

      expect(component.selected).toBe(hands.rock);
    });

    it('should emit "selection" with hand', () => {
      component.selectHand(hands.rock);

      expect(component.selection.emit).toHaveBeenCalledWith(hands.rock);
    });
  });

  describe('isDisabled', () => {
    beforeEach(() => {
      component.selected = hands.rock;
    });

    it('should return false if slow mode is disabled', () => {
      component.slow = false;
      expect(component.isDisabled(hands.rock)).toBeFalse();
      expect(component.isDisabled(hands.paper)).toBeFalse();
      expect(component.isDisabled(hands.scissors)).toBeFalse();
    });

    it('should return false if nothing is selected', () => {
      component.selected = null;
      expect(component.isDisabled(hands.rock)).toBeFalse();
      expect(component.isDisabled(hands.paper)).toBeFalse();
      expect(component.isDisabled(hands.scissors)).toBeFalse();
    });

    it('should return true for all hands that are not selected', () => {
      expect(component.isDisabled(hands.rock)).toBeFalse();
      expect(component.isDisabled(hands.paper)).toBeTrue();
      expect(component.isDisabled(hands.scissors)).toBeTrue();
    });
  });

  describe('isSelected', () => {
    beforeEach(() => {
      component.selected = hands.rock;
    });

    it('should return false if slow mode is disabled', () => {
      component.slow = false;
      expect(component.isSelected(hands.rock)).toBeFalse();
      expect(component.isSelected(hands.paper)).toBeFalse();
      expect(component.isSelected(hands.scissors)).toBeFalse();
    });

    it('should return false if nothing is selected', () => {
      component.selected = null;
      expect(component.isSelected(hands.rock)).toBeFalse();
      expect(component.isSelected(hands.paper)).toBeFalse();
      expect(component.isSelected(hands.scissors)).toBeFalse();
    });

    it('should return true for correct hand', () => {
      expect(component.isSelected(hands.rock)).toBeTrue();
      expect(component.isSelected(hands.paper)).toBeFalse();
      expect(component.isSelected(hands.scissors)).toBeFalse();
    });
  });
});
