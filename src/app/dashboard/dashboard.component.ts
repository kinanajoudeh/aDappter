import { Component } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent {
  public barChartOptions = {};
  public barChartLabels = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
  public barChartType = "bar";
  public barChartLegend = true;
  public barChartData = [
    {data: [11, 13, 43], label: "A"},
      {data: [2, 4, 4], label: "B"},
      {data: [1, 13, 3], label: "C", type: 'line'}
  ];

  ngOnInit() {
    setTimeout(function(){
      this.barChartData = [
        {data: [110, 13, 43], label: "A"},
          {data: [2, 4, 4], label: "B"},
          {data: [1, 13, 3], label: "C", type: 'line'}
      ];
    }.bind(this), 2000);
  }
 }
