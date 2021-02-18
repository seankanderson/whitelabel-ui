import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBrowserComponent } from './menu-browser.component';

describe('MenuBrowserComponent', () => {
  let component: MenuBrowserComponent;
  let fixture: ComponentFixture<MenuBrowserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuBrowserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
