import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProgressBarStyle } from '@ui-kit/components/types';
import { VProgress } from '@ui-kit/components/v-progress/v-progress';

@Component({
  selector: 'v-progress-page',
  templateUrl: './v-progress.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgTemplateOutlet, VProgress],
})
export class VProgressPage {
  protected readonly ProgressBarStyle = ProgressBarStyle;
}
