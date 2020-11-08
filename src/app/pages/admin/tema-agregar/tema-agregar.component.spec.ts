import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemaAgregarComponent } from './tema-agregar.component';

describe('TemaAgregarComponent', () => {
  let component: TemaAgregarComponent;
  let fixture: ComponentFixture<TemaAgregarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemaAgregarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemaAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
