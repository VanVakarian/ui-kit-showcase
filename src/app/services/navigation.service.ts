import { inject, Injectable } from '@angular/core';
import { PagePath, pages } from '@app/app.routes';
import { RouterService } from '@app/services/router.service';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private readonly routerService = inject(RouterService);

  public readonly uiShowcaseButtons: PagePath[] = pages.map((r) => r.path);

  public readonly currentRoute$ = this.routerService.currentRoute$;
}
