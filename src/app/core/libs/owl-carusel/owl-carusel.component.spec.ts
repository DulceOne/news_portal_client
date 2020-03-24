import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwlCaruselComponent } from './owl-carusel.component';

describe('OwlCaruselComponent', () => {
  let component: OwlCaruselComponent;
  let fixture: ComponentFixture<OwlCaruselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwlCaruselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwlCaruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
