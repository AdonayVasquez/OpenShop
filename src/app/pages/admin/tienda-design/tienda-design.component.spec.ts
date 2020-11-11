import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaDesignComponent } from './tienda-design.component';

describe('TiendaDesignComponent', () => {
  let component: TiendaDesignComponent;
  let fixture: ComponentFixture<TiendaDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiendaDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendaDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
