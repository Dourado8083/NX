import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { productListRoutes } from './lib.routes';
import { ProductComponent } from './product/product.component';
import { UiComponent } from 'modules/shared/ui';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(productListRoutes), UiComponent],
  declarations: [ProductComponent],
})
export class ProductListModule {}
