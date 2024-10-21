import { CommonModule } from "@angular/common";
import {
  Component,
  ViewChild,
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
  @ViewChild("rectangleRef", { static: false })
  rectangleRef!: ElementRef<HTMLElement>;
  @ViewChild("hoverArrowRef", { static: false })
  hoverArrowRef!: ElementRef<HTMLElement>;
  @ViewChild("infoBoxRef", { static: false })
  infoBoxRef!: ElementRef<HTMLElement>;

  private subscription: Subscription | undefined;
  public isVisible = false;

  constructor(
    private viewportService: ViewportService,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    // Überprüfung, ob die Referenzen korrekt sind
    console.log(this.rectangleRef.nativeElement);
    console.log(this.hoverArrowRef.nativeElement);
    console.log(this.infoBoxRef.nativeElement);

    this.subscription = this.viewportService
      .observeElement(this.rectangleRef.nativeElement)
      .subscribe((isVisible) => {
        console.log("Element sichtbar:", isVisible);
        this.isVisible = isVisible;

        // Die Klasse 'active' auf die spezifischen Elemente anwenden
        if (isVisible) {
          this.rectangleRef.nativeElement.classList.add("active");
          this.hoverArrowRef.nativeElement.classList.add("active");
          this.infoBoxRef.nativeElement.classList.add("active");
        } else {
          this.rectangleRef.nativeElement.classList.remove("active");
          this.hoverArrowRef.nativeElement.classList.remove("active");
          this.infoBoxRef.nativeElement.classList.remove("active");
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
