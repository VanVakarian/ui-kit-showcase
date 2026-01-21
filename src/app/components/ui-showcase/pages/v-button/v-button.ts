import { ChangeDetectionStrategy, Component } from '@angular/core';
import { VButton } from '@ui-kit/components/v-button/v-button';
import { VButtonOld } from '@ui-kit/components/v-button/v-button-old';
import { IconName, VIcon } from '@ui-kit/components/v-icon/v-icon';

@Component({
  selector: 'v-button-page',
  templateUrl: './v-button.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [VButton, VButtonOld, VIcon],
})
export class VButtonPage {
  protected readonly Icon = IconName;
}
