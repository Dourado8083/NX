import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { orderRoutes } from './lib.routes';
import { OrderComponent } from './order/order.component';
import { UiComponent } from 'modules/shared/ui';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(orderRoutes),UiComponent],
  declarations: [OrderComponent],
})
export class OrderModule {}
