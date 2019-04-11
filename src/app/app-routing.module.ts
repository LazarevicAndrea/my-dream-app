import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonutsComponent } from './donuts/donuts.component';
import { ContactComponent } from './contact/contact.component';
import { DonutDetailsComponent } from './donuts/donut-details/donut-details.component';
import { DonutListComponent } from './donuts/donut-list/donut-list.component';
import { DonutComponent } from './donuts/donut-list/donut/donut.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/donuts', pathMatch: 'full' },
  { path: 'donuts', component: DonutsComponent, children: [
    { path: ':id', component: DonutDetailsComponent },
  ] },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
