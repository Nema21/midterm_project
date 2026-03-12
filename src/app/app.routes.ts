import { Routes } from '@angular/router';
import { HomeComponent } from './comps/home/home.component';
import { InterpolationComponent } from './interpolation/interpolation/interpolation.component';
import { PropertyComponent } from './interpolation/property/property.component';
import { EventComponent } from './interpolation/event/event.component';
import { TwoWayComponent } from './interpolation/two-way/two-way.component';
import { ProductsComponent } from './products/products.component';
import { ProdListComponent } from './prodManagement/prod-list/prod-list.component';
import { ViewDetailsComponent } from './prodManagement/view-details/view-details.component';

export const routes: Routes = [
    {path:'home', component: HomeComponent},
    {path:'interpolation', component: InterpolationComponent},
    {path:'property', component: PropertyComponent},
    {path:'event', component: EventComponent},
    {path:'two-way', component: TwoWayComponent},
    {path:'products', component: ProductsComponent},
    { path: 'prodManagement/view-details/:id/details', component: ViewDetailsComponent },
    { path: 'products-list', component: ProdListComponent },
  { path: '', redirectTo: 'products-list', pathMatch: 'full' },
  {path:'prod-list',
    component: ProdListComponent,
    children:[
        {
            path: ':id',
            children: [
                {path: 'details', component: ViewDetailsComponent}
            ]
        }
    ]
  }
     
];
