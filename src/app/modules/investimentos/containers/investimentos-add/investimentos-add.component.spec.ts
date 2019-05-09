import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestimentosAddComponent } from './investimentos-add.component';

describe('InvestimentosAddComponent', () => {
  let component: InvestimentosAddComponent;
  let fixture: ComponentFixture<InvestimentosAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestimentosAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestimentosAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
