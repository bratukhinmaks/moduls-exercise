import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  headers: any = [
    {title: 'Bio', key: 'bio'},
    {title: 'Company', key: 'company'},
    {title: 'About', key: 'about'},
    {title: 'Features', key: 'features'},
  ];

  posts: [{}] = [
    {
      bio: 'Hello there is some onfo about our company',
      company: 'Our company size about 20 people',
      about: 'We are very proud of our company and would like you to join us',
      features: 'We have great amount of features for you'
    }
  ];
  current: number;

  constructor() {
  }

  ngOnInit() {
  }

}
