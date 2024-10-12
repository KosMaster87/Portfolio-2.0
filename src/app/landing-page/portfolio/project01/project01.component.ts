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
  slideInOutLeft,
  slideInOutRight,
  slideInOutLeftTop,
  slideInOutRightTop,
  slideInFromBottom,
  slideInFromBottomTwo,
  slideInFromBottomThree,
  fromBackground,
} from "../../../../app/shared/animation";
import { TranslateModule } from "@ngx-translate/core";
@Component({
  selector: "app-project01",
  standalone: true,
  imports: [TranslateModule],
  templateUrl: "./project01.component.html",
  styleUrl: "./project01.component.scss",
  animations: [
    slideInOutLeft,
    slideInOutRight,
    slideInOutLeftTop,
    slideInOutRightTop,
    slideInFromBottom,
    slideInFromBottomTwo,
    slideInFromBottomThree,
    fromBackground,
  ],
})
export class Project01Component implements AfterViewInit, OnDestroy {
  slideInLeft = "out";
  slideInRight = "out";
  slideInLeftTop = "out";
  slideInRightTop = "out";
  slideInBottom: string = "out";
  slideInFromBottomTwo: string = "out";
  slideInFromBottomThree: string = "out";
  fromBackground: string = "out";
  private subscription: Subscription | undefined;

  constructor(
    private el: ElementRef,
    private viewportService: ViewportService,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    this.subscription = this.viewportService
      .observeElement(this.el.nativeElement)
      .subscribe((isIntersecting) => {
        this.slideInRight = isIntersecting ? "in" : "out";
        this.slideInLeft = isIntersecting ? "in" : "out";
        this.slideInRightTop = isIntersecting ? "in" : "out";
        this.slideInLeftTop = isIntersecting ? "in" : "out";
        this.slideInBottom = isIntersecting ? "in" : "out";
        this.slideInFromBottomTwo = isIntersecting ? "in" : "out";
        this.slideInFromBottomThree = isIntersecting ? "in" : "out";
        this.fromBackground = isIntersecting ? "in" : "out";
        this.cdr.detectChanges();
      });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

// import { Component } from "@angular/core";

// @Component({
//   selector: "app-project01",
//   standalone: true,
//   imports: [],
//   templateUrl: "./project01.component.html",
//   styleUrl: "./project01.component.scss",
// })
// export class Project01Component {}
