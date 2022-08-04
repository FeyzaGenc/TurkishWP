import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SimPageRoutingModule } from './sim-routing.module';

import { SimPage } from './sim.page';
import { Sim } from '@ionic-native/sim/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SimPageRoutingModule,
    Sim,
  ],
  declarations: [SimPage]
})
export class SimPageModule {}
