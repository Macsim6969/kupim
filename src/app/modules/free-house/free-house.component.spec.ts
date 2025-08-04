import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeHouseComponent } from './free-house.component';

describe('FreeHouseComponent', () => {
  let component: FreeHouseComponent;
  let fixture: ComponentFixture<FreeHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreeHouseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
