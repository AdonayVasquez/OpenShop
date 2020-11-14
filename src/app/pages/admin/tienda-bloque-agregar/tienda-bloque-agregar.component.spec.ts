import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaBloqueAgregarComponent } from './tienda-bloque-agregar.component';

describe('TiendaBloqueAgregarComponent', () => {
  let component: TiendaBloqueAgregarComponent;
  let fixture: ComponentFixture<TiendaBloqueAgregarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiendaBloqueAgregarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendaBloqueAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
