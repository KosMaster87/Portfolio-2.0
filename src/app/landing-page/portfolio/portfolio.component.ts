import { Component } from "@angular/core";
import { Project01Component } from "./project01/project01.component";
import { Project02Component } from "./project02/project02.component";

@Component({
  selector: "app-portfolio",
  standalone: true,
  imports: [Project01Component, Project02Component],
  templateUrl: "./portfolio.component.html",
  styleUrl: "./portfolio.component.scss",
})
export class PortfolioComponent {
  openInNewTab(url: string) {
    window.open(url, "_blank");
  }
}
