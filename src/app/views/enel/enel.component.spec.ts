import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnelComponent } from './enel.component';

describe('EnelComponent', () => {
  let component: EnelComponent;
  let fixture: ComponentFixture<EnelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
