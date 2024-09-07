import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInscriptionnComponent } from './page-inscriptionn.component';

describe('PageInscriptionnComponent', () => {
  let component: PageInscriptionnComponent;
  let fixture: ComponentFixture<PageInscriptionnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageInscriptionnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageInscriptionnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
