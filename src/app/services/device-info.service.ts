import { computed, Injectable, signal } from '@angular/core';
import { fromEvent } from 'rxjs';
import { distinctUntilChanged, map, startWith } from 'rxjs/operators';

const SCREEN_MOBILE_BREAKPOINT_PX = 768;
const KEYBOARD_DETECTION_HEIGHT_THRESHOLD_PX = 150;
const KEYBOARD_CLOSE_DEBOUNCE_MS = 150;

@Injectable({
  providedIn: 'root',
})
export class DeviceInfoService {
  public readonly isMobileScreen$$ = signal(false);
  public readonly isDesktopScreen$$ = computed(() => !this.isMobileScreen$$());
  public readonly isKeyboardOpen$$ = signal(false);

  private initialViewportHeight: number = 0;
  private keyboardCloseTimeout: ReturnType<typeof setTimeout> | null = null;

  constructor() {
    this.setupResizeListener();
    this.setupKeyboardDetection();
  }

  private setupResizeListener(): void {
    fromEvent(window, 'resize')
      .pipe(
        startWith(null),
        map(() => window.innerWidth < SCREEN_MOBILE_BREAKPOINT_PX),
        distinctUntilChanged()
      )
      .subscribe((isMobile) => {
        this.isMobileScreen$$.set(isMobile);
      });
  }

  private setupKeyboardDetection(): void {
    if (typeof window === 'undefined') return;

    const visualViewport = window.visualViewport;
    if (!visualViewport) return;

    this.initialViewportHeight = visualViewport.height;

    const checkKeyboardState = () => {
      const currentHeight = visualViewport.height;
      const heightDifference = this.initialViewportHeight - currentHeight;
      const isOpen = heightDifference > KEYBOARD_DETECTION_HEIGHT_THRESHOLD_PX;

      if (isOpen) {
        if (this.keyboardCloseTimeout) {
          clearTimeout(this.keyboardCloseTimeout);
          this.keyboardCloseTimeout = null;
        }
        this.isKeyboardOpen$$.set(true);
      } else {
        if (this.keyboardCloseTimeout) {
          clearTimeout(this.keyboardCloseTimeout);
        }
        this.keyboardCloseTimeout = setTimeout(() => {
          this.isKeyboardOpen$$.set(false);
          this.keyboardCloseTimeout = null;
        }, KEYBOARD_CLOSE_DEBOUNCE_MS);
      }
    };

    visualViewport.addEventListener('resize', checkKeyboardState);
    visualViewport.addEventListener('scroll', checkKeyboardState);
  }
}
