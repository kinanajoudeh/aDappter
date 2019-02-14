import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects = [{id: 1, name: "Save The Foxes", description: "Make life more foxy"},
              {id: 2, name: "Save The Foxes", description: "Make life more foxy"},
              {id: 3, name: "Save The Foxes", description: "Make life more foxy"},
              {id: 4, name: "Save The Foxes", description: "Make life more foxy"},
              {id: 5, name: "Save The Foxes", description: "Make life more foxy"}]

  constructor() { }

  ngOnInit() {
  }

  loadMore(project) {
    console.log(project.name)
  }

}
