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
  protected readonly dateList = [
    new Date(2025, 0, 5),
    new Date(2025, 0, 12),
    new Date(2025, 0, 19),
    new Date(2025, 0, 26),
    new Date(2025, 1, 2),
    new Date(2025, 1, 9),
    new Date(2025, 1, 16),
    new Date(2025, 1, 23),
  ];
  protected readonly dateValues = this.dateList.map((value) => value.getTime());
  protected readonly dateRange$$ = signal<[number, number]>([this.dateValues[1], this.dateValues[6]]);
  protected readonly dateFormatter = new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });

  protected formatDate(value: number): string {
    return this.dateFormatter.format(new Date(value));
  }
}
