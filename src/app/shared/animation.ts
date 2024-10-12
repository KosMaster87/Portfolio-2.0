import { trigger, state, style, transition, animate } from '@angular/animations';


export const slideInOutTop = trigger('slideInOutTop', [
  state('void', style({
    transform: 'translateY(-50%)',
    opacity: 0
  })),
  state('in', style({
    transform: 'translateY(0)',
    opacity: 1
  })),
  state('out', style({
    transform: 'translateY(-50%)',
    opacity: 0
  })),
  transition('void => in', [
    animate('0.5s ease-in')
  ]),
  transition('in => out', [
    animate('0.5s ease-out')
  ]),
  transition('out => in', [
    animate('0.5s ease-in')
  ])
]);



//LEFT
export const slideInOutLeft = trigger('slideInOutLeft', [
  state('void', style({
    transform: 'translateX(0%)',
    opacity: 0
  })),
  state('in', style({
    transform: 'translateX(0)',
    opacity: 1
  })),
  state('out', style({
    transform: 'translateX(0%)',
    opacity: 0
  })),
  transition('void => in', [
    animate('0.5s ease-in')
  ]),
  transition('in => out', [
    animate('0.5s ease-out')
  ]),
  transition('out => in', [
    animate('0.5s ease-in')
  ])
]);

//RIGHT
export const slideInOutRight = trigger('slideInOutRight', [
  state('void', style({
    transform: 'translateX(0%)',
    opacity: 0
  })),
  state('in', style({
    transform: 'translateX(0)',
    opacity: 1
  })),
  state('out', style({
    transform: 'translateX(0%)',
    opacity: 0
  })),
  transition('void => in', [
    animate('0.5s ease-in')
  ]),
  transition('in => out', [
    animate('0.5s ease-out')
  ]),
  transition('out => in', [
    animate('0.5s ease-in')
  ])
]);



//LEFT BOTTOM
export const slideInOutLeftBottom = trigger('slideInOutLeftBottom', [
  state('void', style({
    transform: 'translateX(-200%) translateY(200%)',
    opacity: 0
  })),
  state('in', style({
    transform: 'translateX(0) translateY(0)',
    opacity: 1
  })),
  state('out', style({
    transform: 'translateX(-200%) translateY(200%)',
    opacity: 0
  })),
  transition('void => in', [
    animate('0.5s ease-in')
  ]),
  transition('in => out', [
    animate('0.5s ease-out')
  ]),
  transition('out => in', [
    animate('0.5s ease-in')
  ])
]);

//LEFT TOP
export const slideInOutLeftTop = trigger('slideInOutLeftTop', [
  state('void', style({
    transform: 'translateX(-100%) translateY(-300%)',
    opacity: 0
  })),
  state('in', style({
    transform: 'translateX(0) translateY(0)',
    opacity: 1
  })),
  state('out', style({
    transform: 'translateX(-100%) translateY(-300%)',
    opacity: 0
  })),
  transition('void => in', [
    animate('0.5s ease-in')
  ]),
  transition('in => out', [
    animate('0.5s ease-out')
  ]),
  transition('out => in', [
    animate('0.5s ease-in')
  ])
]);

//RIGHT TOP
export const slideInOutRightTop = trigger('slideInOutRightTop', [
  state('void', style({
    transform: 'translateX(50%) translateY(-300%)',
    opacity: 0
  })),
  state('in', style({
    transform: 'translateX(0) translateY(0)',
    opacity: 1
  })),
  state('out', style({
    transform: 'translateX(50%) translateY(-300%)',
    opacity: 0
  })),
  transition('void => in', [
    animate('0.5s ease-in')
  ]),
  transition('in => out', [
    animate('0.5s ease-out')
  ]),
  transition('out => in', [
    animate('0.5s ease-in')
  ])
]);

//BOTTOM
export const slideInFromBottom = trigger('slideInFromBottom', [
  state('void', style({
    transform: 'translateY(100%)',
    opacity: 0
  })),
  state('in', style({
    transform: 'translateY(0)',
    opacity: 1
  })),
  state('out', style({
    transform: 'translateY(100%)',
    opacity: 0
  })),
  transition('void => in', [
    animate('0.5s ease-in')
  ]),
  transition('in => out', [
    animate('0.5s ease-out')
  ]),
  transition('out => in', [
    animate('0.5s ease-in')
  ])
]);

//FROM BACKGROUND
export const fromBackground = trigger('fromBackground', [
  state('void', style({
    transform: 'translateY(0)',
    opacity: 0
  })),
  state('in', style({
    transform: 'translateY(0)',
    opacity: 1
  })),
  state('out', style({
    transform: 'translateY(0)',
    opacity: 0
  })),
  transition('void => in', [
    animate('1s ease-in')
  ]),
  transition('in => out', [
    animate('1s ease-out')
  ]),
  transition('out => in', [
    animate('1s ease-in')
  ])
]);

//ARROWS

export const arrowRight = trigger('arrowRight', [
  state('void', style({
    transform: 'translateX(0) translateY(0)',
    opacity: 1
  })),
  state('in', style({
    transform: 'translateX(-25%) translateY(30%)',
    opacity: 1
  })),
  state('out', style({
    transform: 'translateX(0) translateY(0)',
    opacity: 1
  })),
  transition('void => in', [
    animate('0.75s ease')
  ]),
  transition('in => out', [
    animate('0.75s ease')
  ]),
  transition('out => in', [
    animate('0.75s ease')
  ])
]);

export const arrowLeft = trigger('arrowLeft', [
  state('void', style({
    transform: 'translateX(0) translateY(0)',
    opacity: 1
  })),
  state('in', style({
    transform: 'translateX(25%) translateY(30%)',
    opacity: 1
  })),
  state('out', style({
    transform: 'translateX(0) translateY(0)',
    opacity: 1
  })),
  transition('void => in', [
    animate('0.5s ease')
  ]),
  transition('in => out', [
    animate('0.5s ease')
  ]),
  transition('out => in', [
    animate('0.5s ease')
  ])
]);


//NAVBAR ANIMATION

export const slideInFromBottomTwo = trigger('slideInFromBottomTwo', [
  state('void', style({
    transform: 'translateY(150%)',
    opacity: 0
  })),
  state('in', style({
    transform: 'translateY(0)',
    opacity: 1
  })),
  state('out', style({
    transform: 'translateY(150%)',
    opacity: 0
  })),
  transition('void => in', [
    animate('0.75s ease-in')
  ]),
  transition('in => out', [
    animate('0.75s ease-out')
  ]),
  transition('out => in', [
    animate('0.75s ease-in')
  ])
]);

export const slideInFromBottomThree = trigger('slideInFromBottomThree', [
  state('void', style({
    transform: 'translateY(200%)',
    opacity: 0
  })),
  state('in', style({
    transform: 'translateY(0)',
    opacity: 1
  })),
  state('out', style({
    transform: 'translateY(200%)',
    opacity: 0
  })),
  transition('void => in', [
    animate('1s ease-in')
  ]),
  transition('in => out', [
    animate('1s ease-out')
  ]),
  transition('out => in', [
    animate('1s ease-in')
  ])
]);