import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutToolsComponent } from './about-tools.component';

describe('AboutToolsComponent', () => {
  let component: AboutToolsComponent;
  let fixture: ComponentFixture<AboutToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
