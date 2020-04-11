import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http'; 
import { CalendarModule } from 'primeng/calendar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';
import { MatBadgeModule } from '@angular/material/badge';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HostDashboardComponent } from './host-dashboard/host-dashboard.component';
import { SuccessDialog } from './host-dashboard/host-dashboard.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { MyEventsComponent } from './my-events/my-events.component';
import { EventComponent } from './event/event.component';
import { MyPayoutsComponent } from './my-payouts/my-payouts.component';
import { NewsroomComponent } from './newsroom/newsroom.component';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { DonationPolicyComponent } from './donation-policy/donation-policy.component';
import { MiniFooterComponent } from './mini-footer/mini-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HostDashboardComponent,
    SuccessDialog,
    EditEventComponent,
    MyEventsComponent,
    EventComponent,
    MyPayoutsComponent,
    NewsroomComponent,
    AboutComponent,
    FaqComponent,
    FooterComponent,
    HeaderComponent,
    TermsComponent,
    PrivacyPolicyComponent,
    DonationPolicyComponent,
    MiniFooterComponent
  ],
  imports: [
    MatBadgeModule,
    MatPaginatorModule,
    MatTableModule,
    MatDialogModule,
    CalendarModule,
    HttpClientModule,
    FileUploadModule,
    MatRadioModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  entryComponents: [SuccessDialog],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
