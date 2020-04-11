import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  faqList = [
    {
      question: "what is your ___?", answer: `Sairyō makes available to you this website located at www.sairyōevents.com (the “Website”) subject to
                your acceptance of` },
    {
      question: "what is your ___?", answer: `Sairyō reserves the right, in its sole discretion, to update, revise, supplement, and modify these Terms
                of Use as well` },
    {
      question: "what is your ___?", answer: `such modifications have been posted shall indicate your acceptance of and agreement to be bound by these
                Terms of Use as
                modified` },
    { question: "what is your ___?", answer: "My ___ are __ and __" },
    { question: "what is your ___?", answer: "My ___ are __ and __" }
  ]
  constructor() { }

  ngOnInit() {
  }

}
