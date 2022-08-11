import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
//import { AppRoutingModule } from 'src/app/app-routing.module';

import { SimPage } from './sim.page';

describe('SimPage', () => {
  let component: SimPage;
  let fixture: ComponentFixture<SimPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SimPage ],
      imports: [IonicModule.forRoot(),
        //AppRoutingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SimPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    //router=TestBed.get(Router);
  }));

  // it('should go to home page after sim', () => {
  //   spyOn(router,'navigate');
  //   component.ngOnInit();
  //   expect(router.navigate).toHaveBeenCalledWith(['home']);
  // });
});
