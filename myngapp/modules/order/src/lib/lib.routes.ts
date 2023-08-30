import { Route } from '@angular/router';
import { OrderComponent } from './order/order.component';

export const orderRoutes: Route[] = [
 {path: '', pathMatch:'full' ,component: OrderComponent} 
];
