import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  public workExperiences = {
    viewExperiences: true,
    experience: [
      {
        role: 'Full Stack Engineer',
        company: 'AutoEcolePlus',
        color: '#3781c2',
        companylogo: 'assets/images/infosys.png',
        date: 'jan 2020 – aug 2020',
        desc: "working on the startup solution to add modules and features  maintenance some problems changing UIxUX design's ",
        descBullets: [
          'first internship: developing a web portfolio from scratch using Angular 8, HTML5, CSS3, Bootstrap 4, and TypeScript. to know the basics of UI/UX design and how to implement it in a website.',
          'second internship: start to work on the startup solution to add modules and features and make some tests to improve the performance of the application',
        ],
      },
      {
        role: 'Computer Science & development information System ',
        company: 'Iset University',
        color: '#3f703f',
        companylogo: 'assets/images/iset-sousse.png',
        date: 'Aug 2017 – Jul 2020',
        desc: 'I have completed my 3 year graduation degree in computer science',
        descBullets: [
          'Developing multiple applications using different technologies and frameworks like JEE/Android Programing c and c++',
          'Academic Projects :',
          'Shop Management System : a desktop application using javaFx for managing a clothing brand financial and stock management',
          'Tunisian Shop: a Web Application that provides customers with the ability to buy products online and get them delivered to their homes ',
        ],
      },
      {
        role: 'Software Engineer ',
        company: 'Esprit university',
        color: '#ff9102',
        companylogo: 'assets/images/esprit.png',
        date: 'Sept 2021 – Aug 2023',
        desc: 'software Engineer degree on the University specialized on mobile development ',
        descBullets: [
          'Academic Projects :',
          'PIdev  : a desktop with JavaFx /web with symfony /Mobile for the management of musical events, sale of tickets , interact with artists and fans ',
          'Insight: A Cross platform application which allows prediction more then one ocular disease with two sections the first one concerned patients by uploading an external eye picture and the second for ophthalmologist using retina images, and it have been created with PWA angular/expressJs/mongoDb and tensorflow',
          'Pandapp: A Native ios/Android application that helps students interact with clubs in University with section of lost and found',
        ],
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
