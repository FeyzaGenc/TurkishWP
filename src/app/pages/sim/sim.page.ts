import { Component, OnInit } from '@angular/core';
import { Sim } from '@ionic-native/sim/ngx';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-sim',
  templateUrl: './sim.page.html',
  styleUrls: ['./sim.page.scss'],
})
export class SimPage implements OnInit {

  tel: string="";

  constructor(private sim:Sim,private toastCtrl:ToastController
    //private router:Router
    ) { }

  // async showToast(){
  //   await this.toastCtrl.create({
  //     message:"Telefon numarası doğrulandı"
  //   }).then(res=>res.present());
  // }
  getPhoneNumber()
{
    this.sim.getSimInfo().then(
    (info) => console.log('Sim info: ', info),
    (err) => console.log('Unable to get sim info: ', err)
  );
   
}
  ngOnInit() {
    //this.showToast();
    // setTimeout(() => {
    //    this.router.navigate(['home']);
    // },5000)
  }

}
