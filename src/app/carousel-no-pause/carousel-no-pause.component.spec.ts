import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselNoPauseComponent } from './carousel-no-pause.component';

describe('CarouselNoPauseComponent', () => {
  let component: CarouselNoPauseComponent;
  let fixture: ComponentFixture<CarouselNoPauseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselNoPauseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselNoPauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
