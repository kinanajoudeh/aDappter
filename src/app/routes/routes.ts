import { LoginComponent } from "../login/login.component";
import { LayoutComponent } from "../layout/layout.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { ProjectsComponent } from "../projects/projects.component";

export const routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "dashboard", component: DashboardComponent },
      { path: "projects", component: ProjectsComponent }
    ]
  },
  { path: "login", component: LoginComponent }
  // { path: '', redirectTo: 'login', pathMatch: 'full' }
];
