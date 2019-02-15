import { Component, OnInit } from "@angular/core";
import { ProjectService } from "../project.service";
import { Observable, of } from "rxjs";
import { Project, Emission } from "../org.energy.network";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"]
  // providers:[ProjectService]
})
export class ProjectsComponent {
  //projects = null;

  projects = [
    {
      projectTitle: "Water Charity",
      long:
        "Water Charity, a 501(c)(3) nonprofit dedicated to helping people access clean drinking water and improved sanitation. In our 11+ years, Water Charity has done more than 4,400 water, sanitation and public health projects in 77 countries, benefiting more than 4.5 million people!With our unique and extremely efficient method of operation, and an exemplary, transparent track record of sustainable,effective projects, you will be hard pressed to find any charity, in any field, that can match our accomplishments.Water Charity is a partner of the National Peace Corps Association.",
      projectDescription:
        "Water Charity, a 501(c)(3) nonprofit dedicated to...",
      projectID: 0,
      projectBalance: 1500,
      tokensGoal: 1000,
      status: "open",
      src: "https://unsplash.com/photos/-Xq89mWvotk"
    },
    {
      projectTitle: "WeForest",
      projectDescription: "We encourage every company to reduce and avoid...",
      projectID: 1,
      projectBalance: 1000,
      tokensGoal: 2000,
      status: "open"
    },
    {
      projectTitle: "Pledge to Save the Bees",
      projectDescription:
        "Believe it or not, you have a bee to thank for every...",
      projectID: 2,
      projectBalance: 750,
      tokensGoal: 500,
      status: "open"
    },
    {
      projectTitle: "Recycling: Live a Sustainable Life",
      projectDescription: "If it cannot be reduced, reused or repaired...",
      projectID: 3,
      projectBalance: 800,
      tokensGoal: 1000,
      status: "open"
    },
    {
      projectTitle: "Electric Charger",
      projectDescription:
        "More charging stations for less gas emissions worldwide.",
      projectID: 4,
      projectBalance: 1800,
      tokensGoal: 10000,
      status: "open"
    },
    {
      projectTitle: "Public Transportation",
      projectDescription: "Electric cars, less fuel consumptions, less Co2...",
      projectID: 5,
      projectBalance: 5000,
      tokensGoal: 2500,
      status: "open"
    }
  ];

  constructor(private projectservice: ProjectService) {
    /*  projectservice.getProjects().subscribe(projects => {
      this.projects = projects;
      this.projects.push({ projectTitle: "Save The Foxes", projectDescription: "Make life more foxy", projectID: 0, projectBalance:1000, tokensGoal: 1500,  status:"open", owner:"wwf" })
      console.log(projects);
    }); */
  }

  //  ngOnInit() {}
}
