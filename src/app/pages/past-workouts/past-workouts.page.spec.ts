import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../../components/explore-container/explore-container.module';

import { PastWorkoutsPage } from './past-workouts.page';

describe('Tab3Page', () => {
  let component: PastWorkoutsPage;
  let fixture: ComponentFixture<PastWorkoutsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PastWorkoutsPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PastWorkoutsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
