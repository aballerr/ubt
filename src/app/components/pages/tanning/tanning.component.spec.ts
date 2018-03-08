import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TanningComponent } from './tanning.component';

describe('TanningComponent', () => {
  let component: TanningComponent;
  let fixture: ComponentFixture<TanningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TanningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
