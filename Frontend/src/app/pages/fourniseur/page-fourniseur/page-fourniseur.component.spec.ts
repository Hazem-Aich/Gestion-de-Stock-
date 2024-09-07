import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFourniseurComponent } from './page-fourniseur.component';

describe('PageFourniseurComponent', () => {
  let component: PageFourniseurComponent;
  let fixture: ComponentFixture<PageFourniseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFourniseurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageFourniseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
