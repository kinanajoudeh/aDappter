import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"]
})
export class ProjectsComponent implements OnInit {
  projects = [
    { name: "Save The Foxes", description: "Make life more foxy", id: 0 },
    { name: "Save The Foxes", description: "Make life more foxy", id: 1 },
    { name: "Save The Foxes", description: "Make life more foxy", id: 3 },

  ];

  constructor() {}

  ngOnInit() {}
}
