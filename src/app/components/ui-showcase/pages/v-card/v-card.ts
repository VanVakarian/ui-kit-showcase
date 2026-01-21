import { ChangeDetectionStrategy, Component } from '@angular/core';
import { VButtonOld } from '@ui-kit/components/v-button/v-button-old';
import { VCard } from '@ui-kit/components/v-card/v-card';

@Component({
  selector: 'v-card-page',
  templateUrl: './v-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [VCard, VButtonOld],
})
export class VCardPage {}
