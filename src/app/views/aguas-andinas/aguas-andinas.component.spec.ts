import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AguasAndinasComponent } from './aguas-andinas.component';

describe('AguasAndinasComponent', () => {
  let component: AguasAndinasComponent;
  let fixture: ComponentFixture<AguasAndinasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AguasAndinasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AguasAndinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
