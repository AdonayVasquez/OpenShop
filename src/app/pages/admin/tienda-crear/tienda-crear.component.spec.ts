import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaCrearComponent } from './tienda-crear.component';

describe('TiendaCrearComponent', () => {
  let component: TiendaCrearComponent;
  let fixture: ComponentFixture<TiendaCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiendaCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendaCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
