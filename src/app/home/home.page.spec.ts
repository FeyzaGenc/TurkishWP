import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from '../app-routing.module';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [IonicModule.forRoot(), AppRoutingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router =TestBed.get(Router);
  }));

  it('should go to message page after home', () => {
    spyOn(router, 'navigate');
    component.homepage();
    //component.ngOnInit();
    expect(router.navigate).toHaveBeenCalledWith(['home']);
  });

 
  it('should go to avatar page on home',()=>{
    spyOn(router,'navigate');
    component.avatar();
    expect(router.navigate).toHaveBeenCalledWith(['avatar']);
  })
  
});
