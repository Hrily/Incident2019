import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
// import { TestimonialsComponent } from './testimonials/testimonials.component';
import { EventsComponent } from './events/events.component';
import { AboutComponent } from './about/about.component';
import { IcareComponent } from './icare/icare.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { FooterComponent } from './footer/footer.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IncidentComponent } from './incident/incident.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { BackgroundComponent } from './background/background.component';
import { FourohfourComponent } from './fourohfour/fourohfour.component';
import { FivehundredComponent } from './fivehundred/fivehundred.component';
import { VerzeoComponent } from './verzeo/verzeo.component';
import { CseComponent } from './cse/cse.component';
import { CivilComponent } from './civil/civil.component';
import { MechComponent } from './mech/mech.component';
import { ManagementComponent } from './management/management.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Incident 2019',
      animation: 'HomePage'
    },
  },
  {
    path: 'incident',
    component: IncidentComponent,
    data: {
      title: 'Incident 2019 - Incident',
      animation: 'IncidentPage'
    }
  },
  {
    path: 'statistics',
    component: StatisticsComponent,
    data: {
      title: 'Incident 2019 - Statistics',
      animation: 'StatisticsPage'
    }
  },
  {
    path: 'events',
    component: EventsComponent,
    data: {
      title: 'Incident 2019 - Events',
      animation: 'EventsPage'
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      title: 'Incident 2019 - About',
      animation: 'AboutPage'
    }
  },
  {
    path: 'icare',
    component: IcareComponent,
    data: {
      title: 'Incident 2019 - iCare',
      animation: 'iCarePage'
    }
  },
  {
    path: 'sponsors',
    component: SponsorsComponent,
    data: {
      title: 'Incident 2019 - Sponsors',
      animation: 'SponsorsPage'
    }
  },
  {
    path: 'contact-us',
    component: ContactusComponent,
    data: {
      title: 'Incident 2019 - Contact Us',
      animation: 'ContactUsPage'
    }
  },
  {
    path: 'verzeo',
    component: VerzeoComponent,
    data: {
      title: 'Incident 2019 - verzeo',
      animation: 'ContactUsPage'
    }
  },
  {
    path: 'verzeo/cse',
    component: CseComponent,
    data: {
      title: 'Incident 2019 - cse',
      animation: 'ContactUsPage'
    }
  },
  {
    path: 'verzeo/mech',
    component: MechComponent,
    data: {
      title: 'Incident 2019 - cse',
      animation: 'ContactUsPage'
    }
  },
  {
    path: 'verzeo/civil',
    component: CivilComponent,
    data: {
      title: 'Incident 2019 - cse',
      animation: 'ContactUsPage'
    }
  },
  {
    path: 'verzeo/management',
    component: ManagementComponent,
    data: {
      title: 'Incident 2019 - cse',
      animation: 'ContactUsPage'
    }
  },
  {
    path: '404',
    component: FourohfourComponent,
    data: {
      title: 'Incident 2019 - Error 404',
      animation: ''
    }
  }, {
    path: '500',
    component: FivehundredComponent,
    data: {
      title: 'Incident 2019 - Error 500',
      animation: ''
    }
  },
  { path: '**', component: FourohfourComponent },
];




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LandingComponent,
    // TestimonialsComponent,
    EventsComponent,
    AboutComponent,
    IcareComponent,
    SponsorsComponent,
    FooterComponent,
    ContactusComponent,
    IncidentComponent,
    StatisticsComponent,
    BackgroundComponent,
    FourohfourComponent,
    FivehundredComponent,
    VerzeoComponent,
    CseComponent,
    CivilComponent,
    MechComponent,
    ManagementComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
