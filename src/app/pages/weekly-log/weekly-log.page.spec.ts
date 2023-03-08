import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../../components/explore-container/explore-container.module';

import { WeeklyLogPage } from './weekly-log.page';

describe('Tab2Page', () => {
  let component: WeeklyLogPage;
  let fixture: ComponentFixture<WeeklyLogPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeeklyLogPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(WeeklyLogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
