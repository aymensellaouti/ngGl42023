import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterParamComponent } from './router-param.component';

describe('RouterParamComponent', () => {
  let component: RouterParamComponent;
  let fixture: ComponentFixture<RouterParamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouterParamComponent]
    });
    fixture = TestBed.createComponent(RouterParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
