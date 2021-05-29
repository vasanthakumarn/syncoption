import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForexContainerComponent } from './forex-container.component';

describe('ForexContainerComponent', () => {
  let component: ForexContainerComponent;
  let fixture: ComponentFixture<ForexContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForexContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForexContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
