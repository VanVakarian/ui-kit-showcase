import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ProgressBarStyle } from '@ui-kit/components/types';
import { VSlider } from '@ui-kit/components/v-slider/v-slider';

@Component({
  selector: 'v-slider-page',
  templateUrl: './v-slider.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [VSlider],
})
export class VSliderPage {
  protected readonly ProgressBarStyle = ProgressBarStyle;
  protected readonly singleValue$$ = signal(35);
  protected readonly rangeValue$$ = signal<[number, number]>([20, 80]);
  protected readonly rangeNegativeValue$$ = signal<[number, number]>([-50, 50]);
}
