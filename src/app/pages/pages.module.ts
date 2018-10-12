import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashBoardComponent } from './dash-board/dash-board.component';
import { CartComponent } from './cart/cart.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DashBoardComponent,
    CartComponent,
    OrderDetailsComponent
  ],
  // exports:[
  //   DashBoardComponent,
  //   CartComponent,
  //   OrderDetailsComponent
  // ]
})
export class PagesModule { }
