import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemdetailcardComponent } from './itemdetailcard.component';

describe('ItemdetailcardComponent', () => {
  let component: ItemdetailcardComponent;
  let fixture: ComponentFixture<ItemdetailcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemdetailcardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemdetailcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
