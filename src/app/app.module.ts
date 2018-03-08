import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { FooterComponent } from './components/standard/footer/footer.component';
import { HeaderComponent } from './components/standard/header/header.component';
import { TanningComponent } from './components/pages/tanning/tanning.component';
import { WeightLossComponent } from './components/pages/weight-loss/weight-loss.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    PricingComponent,
    FooterComponent,
    HeaderComponent,
    TanningComponent,
    WeightLossComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCqbGXVEBJ-l_nDqrKJmmKllexNnWzaB0M'
    }),
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'pricing',
        component: PricingComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'tanning',
        component: TanningComponent
      },
      {
        path: 'weight-loss',
        component: WeightLossComponent
      }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
