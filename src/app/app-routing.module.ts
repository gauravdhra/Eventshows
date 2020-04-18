import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ApiComponent } from './components/api/api.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HostlandingComponent } from './components/hostlanding/hostlanding.component';
import { UserDashboardOnboardingComponent } from './components/user-dashboard-onboarding/user-dashboard-onboarding.component';
import { HostprofileComponent } from './components/hostprofile/hostprofile.component';
import { HostDashboardOverviewComponent } from './components/host-dashboard-overview/host-dashboard-overview.component';
import { HostProfileHomeComponent } from './components/host-profile-home/host-profile-home.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { AddeventComponent } from './components/addevent/addevent.component';
import { EventsComponent } from './components/events/events.component';
import { NewsroomAboutUsComponent } from './components/newsroom-about-us/newsroom-about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FaqComponent } from './components/faq/faq.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { MyEventsComponent } from './components/my-events/my-events.component';
import { HostDashboardComponent } from './components/host-dashboard/host-dashboard.component';
import { DonationPolicyComponent } from './components/donation-policy/donation-policy.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TermsComponent } from './components/terms/terms.component';
import { EditEventComponent } from './components/edit-event/edit-event.component';
import { MyPayoutsComponent } from './components/my-payouts/my-payouts.component';
import { BrowseCategoriesComponent } from './components/browse-categories/browse-categories.component';
import { MainSearchComponent } from './components/main-search/main-search.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'api', component: ApiComponent },  
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'host-home', component: HostlandingComponent},
  { path: 'user-dashboard-onboarding', component: UserDashboardOnboardingComponent},
  { path: 'hostprofile-login', component: HostprofileComponent},
  { path: 'hostDashboard-overview', component: HostDashboardOverviewComponent},
  { path: 'hostprofile-home', component: HostProfileHomeComponent},
  { path: 'bar-chart', component: BarChartComponent},
  { path: 'addevents', component: AddeventComponent},
  { path: 'events', component: EventsComponent},
  { path: 'aboutnewsroom', component: NewsroomAboutUsComponent},
  { path: 'contactus', component: ContactUsComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'aboutus', component: AboutUsComponent},
  { path: 'eventlist', component: MyEventsComponent },    
  { path: 'dashboard', component: HostDashboardComponent },  
  { path: 'donation-policy', component: DonationPolicyComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'edit', component: EditEventComponent },
  { path: 'payoutlist', component: MyPayoutsComponent },
  { path: 'browse', component: BrowseCategoriesComponent },
  { path: 'search', component: MainSearchComponent },
  { path: '**', component: HostDashboardComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }