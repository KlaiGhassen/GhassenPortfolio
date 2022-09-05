import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-progress',
  templateUrl: './skill-progress.component.html',
  styleUrls: ['./skill-progress.component.scss']
})
export class SkillProgressComponent implements OnInit {

  techStack = {
    viewSkillBars: true,
    experience: [
      {
        Stack: "Frontend/Design",
        progressPercentage: "77%"
      },
      {
        Stack: "Backend",
        progressPercentage: "73%"
      },
      // {
      //   Stack: "Mobile Development",
      //   progressPercentage: "75%"
      // },
      {
        Stack: "Programming",
        progressPercentage: "79%"
      },
     
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

  progressStyle(percentage:string){
    return {    width: percentage}
  }

}
