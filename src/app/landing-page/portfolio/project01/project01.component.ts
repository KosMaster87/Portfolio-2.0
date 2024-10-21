import { CommonModule } from "@angular/common";

import {
  Component,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  ChangeDetectorRef,
} from "@angular/core";
import { Subscription } from "rxjs";
import { ViewportService } from "./../../../shared/viewport-service.service";
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from "@angular/animations";

@Component({
  selector: "app-project01",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./project01.component.html",
  styleUrls: ["./project01.component.scss"],

  animations: [
    trigger("fadeInOut_Ng", [
      state("in", style({ opacity: 1 })),
      transition(":enter", [style({ opacity: 0 }), animate(1200)]),
      transition(":leave", [animate(300, style({ opacity: 0 }))]),
    ]),
  ],
})
export class Project01Component implements AfterViewInit, OnDestroy {
  private rectangleRef!: HTMLElement | null;
  private hoverArrowRef!: HTMLElement | null;
  private infoBoxRef!: HTMLElement | null;

  private subscription: Subscription | undefined;
  public isVisible = false;

  constructor(
    private el: ElementRef,
    private viewportService: ViewportService,
    private cdr: ChangeDetectorRef
  ) {}

  /**
   * Die Animationen durch Angular und einge vanilla CSS.
   */
  ngAfterViewInit() {
    this.rectangleRef = this.el.nativeElement.querySelector(".rectangle");
    this.hoverArrowRef = this.el.nativeElement.querySelector(".hoverArrow");
    this.infoBoxRef = this.el.nativeElement.querySelector(".infoBox");

    this.subscription = this.viewportService
      .observeElement(this.el.nativeElement)

      .subscribe((isVisible) => {
        console.log("Element sichtbar:", isVisible);
        this.isVisible = isVisible;

        if (isVisible) {
          this.rectangleRef?.classList.add("active");
          this.hoverArrowRef?.classList.add("active");
          this.infoBoxRef?.classList.add("active");
        } else {
          this.rectangleRef?.classList.remove("active");
          this.hoverArrowRef?.classList.remove("active");
          this.infoBoxRef?.classList.remove("active");
        }

        this.cdr.detectChanges();
      });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
