import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { VCheckbox } from '@ui-kit/components/v-checkbox/v-checkbox';

@Component({
  selector: 'v-checkbox-page',
  templateUrl: './v-checkbox.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [VCheckbox],
})
export class VCheckboxPage {
  protected readonly basicChecked$$ = signal(true);
  protected readonly basicUnchecked$$ = signal(false);
  protected readonly switchOn$$ = signal(true);
  protected readonly switchOff$$ = signal(false);
}
