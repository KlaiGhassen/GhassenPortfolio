import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  timeline = [
    // {
    //   heading: "Infosys",
    //   duration: "Present",
    //   subtitle: "",
    //   content: "Upcoming Full stack develover at Infosys!",
    //   className1: "mar-left",
    //   className2: "prt_about_learnbox_right"
    // },
    {
      heading: "Esprit - Computer Science & Engineering & mobile development",
      duration: "2023 2020",
      subtitle: "Esprit University",
      content: "Successfully completed my 2 years of programming and i will graduate on 2023.",
      className1: "mar-right",
      className2: "prt_about_learnbox_left"
    },
    {
      heading: "iset University - Computer Science development information system ",
      duration: "2020 2016",
      subtitle: "Iset Kef University",
      content: "Successfully completed my license studies in 2020 from 2016 \n" ,
      className1: "mar-left",
      className2: "prt_about_learnbox_right"
    },
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
