import { Route } from '@angular/router';
import { ProductComponent } from './product/product.component';

export const productListRoutes: Route[] = [
 {path: '',pathMatch:'full' ,component: ProductComponent} 
];
