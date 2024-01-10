import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBoxPageComponent } from './delete-box-page.component';

describe('DeleteBoxPageComponent', () => {
  let component: DeleteBoxPageComponent;
  let fixture: ComponentFixture<DeleteBoxPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteBoxPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteBoxPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
