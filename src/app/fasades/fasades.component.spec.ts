import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasadesComponent } from './fasades.component';

describe('FasadesComponent', () => {
  let component: FasadesComponent;
  let fixture: ComponentFixture<FasadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FasadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
