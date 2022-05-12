import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  public workExperiences = {
    viewExperiences: true,
    experience: [
      {
        role: "Full Stack Engineer",
        company: "AutoEcolePlus",
        color: "#3781c2",
        companylogo: "../../../assets/images/infosys.png",
        date: "jan 2020 – aug 2020",
        // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        desc: "working on the company solution add modules and maintenance some problems changing some UIxUX design's ",
        // descBullets: [
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        // ]
      },
      {
        role: "Computer Science & development information System ", 
        company: "Iset University",
        color: "#3f703f",
        companylogo: "../../../assets/images/iset-sousse.png",
        date: "Aug 2016 – Jul 2020",
        desc: "I have completed my 3 year graduation degree in computer science",
        // descBullets: [
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        // ]
      },
      {
        role: "Software Engineer Intern",
        company: "Esprit university",
        color: "#ff9102",
        companylogo: "../../../assets/images/esprit.png",
        date: "Sept 2021 – Aug 2023",
        desc: "software Engineer degree on the University specialized on mobile development ",
        },
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
