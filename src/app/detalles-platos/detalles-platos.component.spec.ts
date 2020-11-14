import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesPlatosComponent } from './detalles-platos.component';

describe('DetallesPlatosComponent', () => {
  let component: DetallesPlatosComponent;
  let fixture: ComponentFixture<DetallesPlatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesPlatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesPlatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
