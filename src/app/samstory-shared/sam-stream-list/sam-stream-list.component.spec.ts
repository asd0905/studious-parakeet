import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamStreamListComponent } from './sam-stream-list.component';

describe('SamStreamListComponent', () => {
  let component: SamStreamListComponent;
  let fixture: ComponentFixture<SamStreamListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamStreamListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamStreamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
