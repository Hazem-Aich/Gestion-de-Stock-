import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleCodCltFrsComponent } from './nouvelle-cod-clt-frs.component';

describe('NouvelleCodCltFrsComponent', () => {
  let component: NouvelleCodCltFrsComponent;
  let fixture: ComponentFixture<NouvelleCodCltFrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelleCodCltFrsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouvelleCodCltFrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
