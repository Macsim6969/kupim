import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineAppraisalComponent } from './online-appraisal.component';

describe('OnlineAppraisalComponent', () => {
  let component: OnlineAppraisalComponent;
  let fixture: ComponentFixture<OnlineAppraisalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlineAppraisalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlineAppraisalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
