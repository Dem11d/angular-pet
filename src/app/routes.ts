import {Routes} from '@angular/router';

import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { CartComponent } from './pages/cart/cart.component';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';

export const routes:Routes = [
  { path: '', component: DashBoardComponent },
  {path: 'cart', component: CartComponent},
  {path: 'order-details', component: OrderDetailsComponent},
]