import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { DonutsComponent } from './donuts/donuts.component';
import { ContactComponent } from './contact/contact.component';

import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DonutDetailsComponent } from './donuts/donut-details/donut-details.component';
import { DonutListComponent } from './donuts/donut-list/donut-list.component';
import { DonutComponent } from './donuts/donut-list/donut/donut.component';
import { DonutService } from './donuts/donut.service';
import { Donut } from './donuts/donut.module';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DonutsComponent,
    ContactComponent,
    MapComponent,
    FooterComponent,
    DonutDetailsComponent,
    DonutListComponent,
    DonutComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDIxSB0C-il_qi9NLNFaa21m1lGi4HAUT4'
    })
  ],
  providers: [DonutService],
  bootstrap: [AppComponent]
})
export class AppModule { }


