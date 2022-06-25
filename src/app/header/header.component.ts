import { Component, OnInit } from '@angular/core';
import {
  animate,
  group,
  query,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    // trigger('routerTransition', [
    //   transition('* <=> *', [
    //     query(':enter, :leave', style({ position: 'fixed', opacity: 1 })),
    //     group([
    //       query(':enter', [
    //         style({ opacity:0 }),
    //         animate('1000ms ease-in-out', style({ opacity:1 }))
    //       ]),
    //       query(':leave', [
    //         style({ opacity:1 }),
    //         animate('1000ms ease-in-out', style({ opacity:0 }))]),
    //     ])
    //   ])
    // ])

    trigger('fadein', [
      state(
        'in',
        style({
          opacity: 1,
          transform: 'translateX(0)',
        })
      ),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)',
        }),
        animate(5000),
      ]),
      transition('* => void', [
        animate(
          5000,
          style({
            transform: 'translateX(100px)',
            opacity: 0,
          })
        ),
      ]),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  flagCodes = {
    fr: 'fr',
    en: 'en',
    ar: 'ar',
  };
  availableLangs = [
    {
      id: 'en',
      label: 'English',
    },
    {
      id: 'fr',
      label: 'French',
    },

    {
      id: 'ar',
      label: 'العربية',
    },
  ];
  activeLang;
  constructor(private translate: TranslateService) {}
  greeting = {
    username: 'Klai Ghassen',
    title: "Hi all, I'm Ghassen",
    subTitle:
      'A passionate Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / flutter / ios / Android / Nodejs / Angular2 and some other cool libraries and frameworks.',
    resumeLink:
      'https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing',
  };

  ngOnInit(): void {
    this.activeLang = localStorage.getItem('lang') || 'en';
    localStorage.setItem('lang', this.activeLang);
    this.translate.setDefaultLang(this.activeLang);
  }

  setActiveLang(lang: string): void {
    // Set the active lang
    if (lang != this.activeLang) {
      this.activeLang = lang;
      localStorage.setItem('lang', lang);
      window.location.reload();
    }
  }
}
