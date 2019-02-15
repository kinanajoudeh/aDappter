import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProjectService } from "../project.service";

@Component({
  selector: "app-project-details",
  templateUrl: "./project-details.component.html",
  styleUrls: ["./project-details.component.scss"]
  // providers:[ProjectService]
})
export class ProjectDetailsComponent implements OnInit {
  id = null;
  project = null;
  constructor(
    private route: ActivatedRoute,
    private projectservice: ProjectService
  ) {
    this.id = this.route.snapshot.paramMap.get("id");
    projectservice.getSpecificProject(this.id).subscribe(project => {
      this.project = project;
      console.log(project);
    });
  }

  ngOnInit() {}
}
