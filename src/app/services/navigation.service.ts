import { inject, Injectable } from '@angular/core';

import { RouterService } from '@app/services/router.service';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private readonly routerService = inject(RouterService);

  public readonly uiShowcaseButtons: string[] = [
    'v-button',
    'v-checkbox',
    'v-input',
    'v-card',
    'v-dropdown',
    'v-expand',
    'v-icon',
    'v-modal',
    'v-progress',
    'v-slider',
  ];

  public readonly currentRoute$ = this.routerService.currentRoute$;
}
