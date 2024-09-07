import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMvstkComponent } from './page-mvstk.component';

describe('PageMvstkComponent', () => {
  let component: PageMvstkComponent;
  let fixture: ComponentFixture<PageMvstkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMvstkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMvstkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
