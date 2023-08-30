import { Route } from '@angular/router';
import { HelloWordComponent } from './hello_word/hello-word.component';

export const appRoutes: Route[] = [
    { path: '', pathMatch: 'full', component: HelloWordComponent },
    //module vem nesse formato, por causa do , tsconfig-base.json
    { path: 'products', loadChildren: () => import('modules/product-list').then(m => m.ProductListModule) },
    { path: 'order', loadChildren: () => import('modules/order').then(m => m.OrderModule) },
    
];
