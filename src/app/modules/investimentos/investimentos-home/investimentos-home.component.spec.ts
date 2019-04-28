import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestimentosHomeComponent } from './investimentos-home.component';

describe('InvestimentosHomeComponent', () => {
  let component: InvestimentosHomeComponent;
  let fixture: ComponentFixture<InvestimentosHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestimentosHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestimentosHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
