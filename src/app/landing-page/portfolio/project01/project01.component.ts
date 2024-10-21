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
  styleUrl: "./project01.component.scss",

  animations: [
    trigger("fadeInOut_Ng", [
      state("in", style({ opacity: 1 })),
      transition(":enter", [style({ opacity: 0 }), animate(1200)]),
      transition(":leave", [animate(300, style({ opacity: 0 }))]),
    ]),
  ],
})
export class Project01Component implements AfterViewInit, OnDestroy {
  private subscription: Subscription | undefined;
  public isVisible = false;

  // Referenzen zu den spezifischen Elementen
  // private rectangleRef: ElementRef<HTMLDivElement>;
  // private hoverArrowRef: ElementRef<HTMLDivElement>;
  // private infoBoxRef: ElementRef<HTMLDivElement>;
  private rectangleRef: HTMLElement | null;
  private hoverArrowRef: HTMLElement | null;
  private infoBoxRef: HTMLElement | null;

  /**
   * Componenten eigens interne.
   * @param el
   * @param viewportService
   * @param cdr
   */
  constructor(
    private el: ElementRef,
    private viewportService: ViewportService,
    private cdr: ChangeDetectorRef
  ) {
    // Hier die Referenzen initialisieren
    this.rectangleRef = el.nativeElement.querySelector(".rectangle");
    this.hoverArrowRef = el.nativeElement.querySelector(".hoverArrow");
    this.infoBoxRef = el.nativeElement.querySelector(".infoBox");

    console.log(this.rectangleRef); // Überprüfung
    console.log(this.hoverArrowRef);
    console.log(this.infoBoxRef);
  }

  /**
   * Die Animationen durch Angular und einge vanilla CSS.
   */
  ngAfterViewInit() {
    this.subscription = this.viewportService
      .observeElement(this.el.nativeElement)

      .subscribe((isVisible) => {
        console.log("Element sichtbar:", isVisible);
        this.isVisible = isVisible;

        // Die Klasse 'active' auf die spezifischen Elemente anwenden
        if (isVisible) {
          this.rectangleRef?.classList.add("active");
          this.hoverArrowRef?.classList.add("active");
          this.infoBoxRef?.classList.add("active");
        } else {
          this.rectangleRef?.classList.remove("active");
          this.hoverArrowRef?.classList.remove("active");
          this.infoBoxRef?.classList.remove("active");
        }

        console.log(this.rectangleRef); // Überprüfung
        console.log(this.hoverArrowRef);
        console.log(this.infoBoxRef);

        this.cdr.detectChanges();
      });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
