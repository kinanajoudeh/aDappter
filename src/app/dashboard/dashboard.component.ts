import { Component } from "@angular/core";
import { DashboardService } from "../dashboard.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
  // providers: [DashboardService]
})
export class DashboardComponent {
  projects = [
    {
      name: "Save The Foxes",
      description: "Make life more foxy",
      id: 0,
      status: "100"
    },
    {
      name: "Save The Foxes",
      description: "Make life more foxy",
      id: 1,
      status: "20"
    },
    {
      name: "Save The Foxes",
      description: "Make life more foxy",
      id: 3,
      status: "1"
    },
    {
      name: "Save The Foxes",
      description: "Make life more foxy",
      id: 2,
      status: "90"
    }
  ];
  public barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Oil consumptions (Liters)"
          }
        }
      ]
    }
  };
  public barChartLabels = ["Nov", "Dec", "Jan"];
  public barChartType = "bar";
  public barChartLegend = true;
  public barChartData = [
    {
      data: [123, 121, 120],
      label: "Baseline",
      type: "bar"
    },
    { data: [124, 120, 119], label: "Your monthly consumption", type: "bar" },
    { data: [125, 122, 121], label: "Swiss average consumption", type: "bar" }
  ];
  public barChartColors = [];

  emissions = [];
  tokens = [];
  id;

  constructor(private dashboardservice: DashboardService) {
    this.id = localStorage.getItem("id");
    /*this.dashboardservice.getEmissions().subscribe(emissions => {
      for(let e of emissions){
        if(e.owner == this.id){
          this.emissions.push(e);
        }
      }
    });
    this.dashboardservice.getTokens(this.id).subscribe(tokens => {
      this.tokens = tokens;
    });*/
  }
}
