import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremissenComponent } from './premissen.component';

describe('PremissenComponent', () => {
  let component: PremissenComponent;
  let fixture: ComponentFixture<PremissenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PremissenComponent]
    });
    fixture = TestBed.createComponent(PremissenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
