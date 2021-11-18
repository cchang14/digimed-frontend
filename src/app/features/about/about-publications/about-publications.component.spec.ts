import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPublicationsComponent } from './about-publications.component';

describe('AboutPublicationsComponent', () => {
  let component: AboutPublicationsComponent;
  let fixture: ComponentFixture<AboutPublicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutPublicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
