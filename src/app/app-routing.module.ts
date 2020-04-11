import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HostDashboardComponent } from './host-dashboard/host-dashboard.component';
import {EventComponent} from './event/event.component'
import {MyEventsComponent} from './my-events/my-events.component'
import {MyPayoutsComponent} from './my-payouts/my-payouts.component'
import {EditEventComponent} from './edit-event/edit-event.component'
import {FaqComponent} from './faq/faq.component'
import {NewsroomComponent} from './newsroom/newsroom.component'
import {AboutComponent} from './about/about.component'
import {TermsComponent} from './terms/terms.component'
import {PrivacyPolicyComponent} from './privacy-policy/privacy-policy.component'
import {DonationPolicyComponent} from './donation-policy/donation-policy.component'
import {MiniFooterComponent} from './mini-footer/mini-footer.component'

const routes: Routes = [
  { path: '', redirectTo: 'terms', pathMatch: 'full' },
  { path: 'dashboard', component: HostDashboardComponent },
  { path: 'event', component: EventComponent },
  { path: 'eventlist', component: MyEventsComponent },
  { path: 'payoutlist', component: MyPayoutsComponent },
  { path: 'edit', component: EditEventComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'newsroom', component: NewsroomComponent },
  { path: 'about', component: AboutComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'donation-policy', component: DonationPolicyComponent },
  { path: 'mini', component: MiniFooterComponent },
  { path: '**', component: HostDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
