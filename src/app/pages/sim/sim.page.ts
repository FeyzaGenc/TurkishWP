import { Component, OnInit } from '@angular/core';
import { Sim } from '@ionic-native/sim/ngx';

@Component({
  selector: 'app-sim',
  templateUrl: './sim.page.html',
  styleUrls: ['./sim.page.scss'],
})
export class SimPage implements OnInit {


  constructor(private sim:Sim) { }

  getPhoneNumber()
{
  this.sim.getSimInfo().then(
    (info) => console.log('Sim info: ', info),
    (err) => console.log('Unable to get sim info: ', err)
  );
}
  
  ngOnInit() {
    
    
  }



}
