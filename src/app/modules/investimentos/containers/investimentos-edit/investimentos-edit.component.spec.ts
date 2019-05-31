import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestimentosEditComponent } from './investimentos-edit.component';

describe('InvestimentosEditComponent', () => {
  let component: InvestimentosEditComponent;
  let fixture: ComponentFixture<InvestimentosEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InvestimentosEditComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestimentosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
