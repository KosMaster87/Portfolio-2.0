// import { Injectable, NgZone } from '@angular/core';
// import { Observable, fromEventPattern } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ViewportService {
//   constructor(private ngZone: NgZone) {}

//   observeElement(element: HTMLElement): Observable<boolean> {
//     return new Observable(observer => {
//       const intersectionObserver = new IntersectionObserver((entries) => {
//         this.ngZone.run(() => {
//           entries.forEach(entry => observer.next(entry.isIntersecting));
//         });
//       }, {
//         threshold: [0.1, 0.9]
//       });

//       intersectionObserver.observe(element);

//       return () => intersectionObserver.disconnect();
//     });
//   }
// }

import { Injectable } from "@angular/core";
import { fromEvent, Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ViewportService {
  observeElement(element: HTMLElement): Observable<boolean> {
    return fromEvent(window, "scroll").pipe(
      map(() => {
        const rect = element.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom >= 0;
      })
    );
  }
}
