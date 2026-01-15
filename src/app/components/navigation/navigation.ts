import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { DeviceInfoService } from '@app/services/device-info.service';
import { NavigationService } from '@app/services/navigation.service';
import { VButton } from '@ui-kit/components/v-button/v-button';
import { ButtonStyle } from '@ui-kit/types';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
  imports: [VButton],
})
export class Navigation {
  protected readonly ButtonStyle = ButtonStyle;

  protected readonly navigationService = inject(NavigationService);
  private readonly deviceInfoService = inject(DeviceInfoService);
  private readonly router = inject(Router);

  protected readonly isDesktop$$ = computed(() => this.deviceInfoService.isDesktopScreen$$());

  protected readonly shouldHideFabButtons$$ = computed(
    () => !this.isDesktop$$() && this.deviceInfoService.isKeyboardOpen$$()
  );

  private readonly currentRoute$$ = toSignal(this.navigationService.currentRoute$, {
    initialValue: '',
  });

  protected readonly uiShowcaseButtons$$ = computed(() => {
    const currentRoute = this.currentRoute$$();
    return this.navigationService.uiShowcaseButtons.map((id) => ({
      id,
      selected: currentRoute.includes(`/${id}`),
    }));
  });

  protected getButtonStyle(button: { selected: boolean }): ButtonStyle {
    return button.selected ? ButtonStyle.Raised : ButtonStyle.Flat;
  }

  protected navigateToLink(id: string): void {
    this.router.navigate([`/${id}`]);
  }
}
