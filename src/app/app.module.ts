import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocialLoginModule, AuthServiceConfig, FacebookLoginProvider } from 'angularx-social-login';
import { HttpClientModule } from '@angular/common/http';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import {MatSelectModule,} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectFilterModule } from 'mat-select-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';
import { CommonModule } from '@angular/common';
import {trigger,state,style,animate,transition}from '@angular/animations';
import { ChartsModule } from 'ng2-charts';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';
import { MatGridListModule } from "@angular/material/grid-list";
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { FileUploadModule } from 'primeng/fileupload';
import { CalendarModule } from 'primeng/calendar';
import {A11yModule} from '@angular/cdk/a11y';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ApiComponent } from './components/api/api.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HostlandingComponent } from './components/hostlanding/hostlanding.component';
import { UserDashboardOnboardingComponent } from './components/user-dashboard-onboarding/user-dashboard-onboarding.component';
import { HostprofileComponent } from './components/hostprofile/hostprofile.component';
import { HostDashboardOverviewComponent } from './components/host-dashboard-overview/host-dashboard-overview.component';
import { HeaderComponent } from './shared-components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { MainFooterComponent } from './shared-components/main-footer/main-footer.component';
import { HostProfileHomeComponent } from './components/host-profile-home/host-profile-home.component';
import { SideNavBarComponent } from './shared-components/side-nav-bar/side-nav-bar.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { MinifiedFooterComponent } from './shared-components/minified-footer/minified-footer.component';
import { MultiFooterComponent } from './shared-components/multi-footer/multi-footer.component';
import { NewsroomAboutUsComponent } from './components/newsroom-about-us/newsroom-about-us.component';
import { FaqComponent } from './components/faq/faq.component';
import { EventsComponent } from './components/events/events.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AddeventComponent } from './components/addevent/addevent.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { MyEventsComponent } from './components/my-events/my-events.component';
import { HostDashboardComponent, SuccessDialog } from './components/host-dashboard/host-dashboard.component';
import { DonationPolicyComponent } from './components/donation-policy/donation-policy.component';
import { EditEventComponent } from './components/edit-event/edit-event.component';
import { MyPayoutsComponent } from './components/my-payouts/my-payouts.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TermsComponent } from './components/terms/terms.component';
import { BrowseCategoriesComponent } from './components/browse-categories/browse-categories.component';
import { MainSearchComponent } from './components/main-search/main-search.component';

const config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('626749104837750')
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    HomeComponent,
    ApiComponent,
    LoginComponent,
    SignupComponent,
    HostlandingComponent,
    UserDashboardOnboardingComponent,
    HostprofileComponent,
    HostDashboardOverviewComponent,
    HeaderComponent,
    LogoComponent,
    MainFooterComponent,
    HostProfileHomeComponent,
    SideNavBarComponent,
    BarChartComponent,
    MinifiedFooterComponent,
    MultiFooterComponent,    
    NewsroomAboutUsComponent, 
    FaqComponent, 
    EventsComponent, 
    ContactUsComponent, 
    AddeventComponent, 
    AboutUsComponent, 
    MyEventsComponent, 
    HostDashboardComponent,
    SuccessDialog,
    DonationPolicyComponent,
    EditEventComponent,
    MyPayoutsComponent,
    PrivacyPolicyComponent,
    TermsComponent,
    BrowseCategoriesComponent,
    MainSearchComponent,
  ],
  imports: [
    BrowserModule,    
    AppRoutingModule,
    SocialLoginModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    NgxMatSelectSearchModule,
    MatFormFieldModule,
    MatSelectFilterModule,
    FormsModule,
    NgSelectModule,
    NgOptionHighlightModule,
    CommonModule,
    ReactiveFormsModule,
    ChartsModule,    
    ChartsModule,
    MatPaginatorModule,
    MatTableModule,
    MatBadgeModule,
    MatGridListModule,
    MatStepperModule,
    MatIconModule,
    MatInputModule, 
    MatButtonModule,
    MatRadioModule,
    MatDialogModule,
    FileUploadModule,
    CalendarModule,    
    A11yModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  entryComponents: [SuccessDialog],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
