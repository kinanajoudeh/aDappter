import { Component, OnInit } from "@angular/core";
import { ProjectService } from "../project.service";
import { Observable, of } from 'rxjs';
import { Project, Emission } from '../org.energy.network';

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
  providers:[ProjectService]
})
export class ProjectsComponent  {

  projects = null;

  //projects = [
    //{ name: "Save The Foxes", description: "Make life more foxy", id: 0 },
    //{ name: "Save The Foxes", description: "Make life more foxy", id: 1 },
    //{ name: "Save The Foxes", description: "Make life more foxy", id: 3 },
    //{ name: "Save The Foxes", description: "Make life more foxy", id: 2 },
    //{ name: "Save The Foxes", description: "Make life more foxy", id: 5 }
  //];

  constructor(private projectservice: ProjectService) {
    projectservice.getProjects().subscribe(projects => {
      this.projects = projects;
      this.projects.push({ projectTitle: "Save The Foxes", projectDescription: "Make life more foxy", projectID: 0, projectBalance:1000, tokensGoal: 1500,  status:"open", owner:"wwf" })
      console.log(projects);
    });
  }

//  ngOnInit() {}
}
