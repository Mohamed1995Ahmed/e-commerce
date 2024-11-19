import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoProductComponent } from './reco-product.component';

describe('RecoProductComponent', () => {
  let component: RecoProductComponent;
  let fixture: ComponentFixture<RecoProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecoProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecoProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
