import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { AvatarPage } from './avatar.page';
import { AppRoutingModule } from '../../app-routing.module';


describe('AvatarPage', () => {
  let component: AvatarPage;
  let fixture: ComponentFixture<AvatarPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AvatarPage ],
      imports: [IonicModule.forRoot(), AppRoutingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AvatarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router =TestBed.get(Router);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should go to home page on avatar',()=>{
    spyOn(router,'navigate');
    component.home();
    expect(router.navigate).toHaveBeenCalledWith(['avatar']);
  })
});

