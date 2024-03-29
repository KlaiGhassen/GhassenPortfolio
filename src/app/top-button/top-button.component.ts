import {Component, HostListener, Inject, OnInit} from '@angular/core';
import { DOCUMENT } from "@angular/common";
@Component({
  selector: 'app-top-button',
  templateUrl: './top-button.component.html',
  styleUrls: ['./top-button.component.scss']
})
export class TopButtonComponent implements OnInit {
  windowScrolled: boolean;
  constructor(@Inject(DOCUMENT) private document: Document) {}
  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
      this.windowScrolled = true;
    }
    else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
      this.windowScrolled = false;
    }
  }
  scrollToTop() {
  
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
});
  }
  ngOnInit() {}
}
