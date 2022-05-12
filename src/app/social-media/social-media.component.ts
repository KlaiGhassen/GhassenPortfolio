import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
  socialMediaLinks = {

    github: "https://github.com/KlaiGhassen",
    linkedin: "https://www.linkedin.com/in/ghassenklai/",
    gmail: "ghassen.klai@esprit.tn",
    instagram : "https://www.instagram.com/klai__ghassen/",
    facebook: "https://www.facebook.com/xXGAsToNX/"
  };
  constructor() { }

  ngOnInit(): void {
  }

}
