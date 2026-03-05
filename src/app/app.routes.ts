import { Routes } from '@angular/router';
import { HomeComponent } from './comps/home/home.component';
import { InterpolationComponent } from './interpolation/interpolation/interpolation.component';
import { PropertyComponent } from './interpolation/property/property.component';
import { EventComponent } from './interpolation/event/event.component';
import { TwoWayComponent } from './interpolation/two-way/two-way.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
    {path:'home', component: HomeComponent},
    {path:'interpolation', component: InterpolationComponent},
    {path:'property', component: PropertyComponent},
    {path:'event', component: EventComponent},
    {path:'two-way', component: TwoWayComponent},
    {path:'products', component: ProductsComponent}
];
