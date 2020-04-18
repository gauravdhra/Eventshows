import { Component, OnInit, Inject } from '@angular/core';
import { ZoomMtg } from '@zoomus/websdk';
import { rejects } from 'assert';
import { AuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
// import { ZoomService } from './zoom.service';

// below function is defined in assets/youtube_live.js file
declare const authenticate: any;

  ZoomMtg.preLoadWasm();
  ZoomMtg.prepareJssdk();

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {

  title = 'sairyo-redifined';
  user: SocialUser;
  loggedIn: boolean;  
  signatureEndpoint = 'UmVHUGtSRXBRY3VNT0hfQmJwQ1ZPQS41MDgtNzUwLTIxMTAuMTU4NTU2ODQ2OTMxNy4wLlluMmdFWUpCcWN3MlJ0MEttbDdwR0VhNkZhaTJQUzkrSWV3a3piNnBwcW89'
  zoom_apiKey = 'ReGPkREpQcuMOH_BbpCVOA'
  meetingNumber = 5087502110
  role = 0
  leaveUrl = 'http://localhost:4200'
  userName = 'Hitendra'
  userEmail = 'sshitendra010@gmail.com'
  passWord = ''

  constructor(private authService: AuthService, public httpClient: HttpClient, @Inject(DOCUMENT) document) {}

    ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user);
    });
  }

  // ngOnInit(): void {
  //   throw new Error("Method not implemented.");
  // }

  youtubeClick() {    
    authenticate();
  }

  crowdCastClick(){
    window.location.href = "https://www.crowdcast.io/new-event?show_tour=true";
  }

  zoomClick(){
    console.log('checkSystemRequirements');
    console.log(JSON.stringify(ZoomMtg.checkSystemRequirements()));  
    this.getSignature();
  }

  getSignature() {
    this.httpClient.post(this.signatureEndpoint, {
	    meetingNumber: this.meetingNumber,
	    role: this.role
    }).toPromise().then((data: any) => {
      if(data.signature) {
        console.log(data.signature)
        this.startMeeting(data.signature)
      } else {
        console.log(data)
      }
    }).catch((error) => {
      console.log(error)
    })
  }

  startMeeting(signature) {

    document.getElementById('zmmtg-root').style.display = 'block'
    ZoomMtg.init({
      leaveUrl: this.leaveUrl,
      isSupportAV: true,
      success: (success) => {
        console.log(success)

        ZoomMtg.join({
          signature: signature,
          meetingNumber: this.meetingNumber,
          userName: this.userName,
          apiKey: this.zoom_apiKey,
          userEmail: this.userEmail,
          passWord: this.passWord,
          success: (success) => {
            console.log(success)
          },
          error: (error) => {
            console.log(error)
          }
        })

      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  stripeClick() {
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_g3J7iPopipFn4IFyQ0mLXvIA000RL6M2Wd',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
      }
    });

    handler.open({
      name: 'Sairyo',
      description: 'Pay to Sairyo',
      amount: 1000
    });

  }
  facebookClick(){
    // window.location.href = "https://www.facebook.com/";
    this.signInWithFB();
  }
  
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
      (response) => {
        console.log(FacebookLoginProvider.PROVIDER_ID + " logged in user data is= ", response);
        this.user = response;
      }
    );
  }
  
  signOut(): void {
    this.authService.signOut();
    this.user = null;
    console.log('User signed out.');
  }
}
