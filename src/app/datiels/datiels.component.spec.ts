import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatielsComponent } from './datiels.component';

describe('DatielsComponent', () => {
  let component: DatielsComponent;
  let fixture: ComponentFixture<DatielsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatielsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatielsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
