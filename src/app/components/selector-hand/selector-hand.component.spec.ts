import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorHandComponent } from './selector-hand.component';
import hands, { Hand } from 'src/app/helpers/hands';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('SelectorHandComponent', () => {
  let component: SelectorHandComponent;
  let fixture: ComponentFixture<SelectorHandComponent>;
  let root: HTMLElement;
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
    fixture.detectChanges();

    spyOn(component.selection, 'emit');

    root = fixture.nativeElement.querySelector('div:first-child');
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
      expect(root.classList.contains('selector-hand')).toBeTrue();
      expect(root.classList.contains('selector-hand-rock')).toBeTrue();
    });

    it('should not have "disabled" by default', () => {
      expect(root.classList.contains('disabled')).toBeFalse();
    });

    it('should not have "selected" by default', () => {
      expect(root.classList.contains('selected')).toBeFalse();
    });

    it('should have "disabled" when component is disabled', () => {
      component.disabled = true;
      fixture.detectChanges();

      expect(root.classList.contains('disabled')).toBeTrue();
    });

    it('should have "selected" when component is selected', () => {
      component.selected = true;
      fixture.detectChanges();

      expect(root.classList.contains('selected')).toBeTrue();
    });
  });
});
