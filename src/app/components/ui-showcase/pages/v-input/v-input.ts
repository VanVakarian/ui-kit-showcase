import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { VButtonOld } from '@ui-kit/components/v-button/v-button-old';
import { IconName, VIcon } from '@ui-kit/components/v-icon/v-icon';
import { VInput, VInputAutoSubmitResult } from '@ui-kit/components/v-input/v-input';

@Component({
  selector: 'v-input-page',
  templateUrl: './v-input.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [VInput, ReactiveFormsModule, VButtonOld, VIcon],
})
export class VInputPage {
  protected readonly Icon = IconName;
  protected readonly autoSubmitResult$$ = signal<VInputAutoSubmitResult | null>(null);
  protected readonly autoSubmitStatusText$$ = signal('');

  private autoSubmitResponseTimeoutId: ReturnType<typeof setTimeout> | null = null;
  private autoSubmitResetTimeoutId: ReturnType<typeof setTimeout> | null = null;

  protected readonly form = new FormGroup({
    testInput: new FormControl(''),
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    disabled: new FormControl({ value: '', disabled: true }),
    error: new FormControl('', Validators.required),
  });

  protected consoleLogFormValue(): void {
    console.log(this.form.value);
  }

  protected handleAutoSubmit(value: string | number | null): void {
    if (this.autoSubmitResponseTimeoutId) {
      clearTimeout(this.autoSubmitResponseTimeoutId);
    }

    if (this.autoSubmitResetTimeoutId) {
      clearTimeout(this.autoSubmitResetTimeoutId);
    }

    this.autoSubmitResult$$.set(null);
    this.autoSubmitStatusText$$.set('Submitting...');

    const minResponseDelayMs = 500;
    const maxResponseDelayMs = 2000;
    const responseDelayRangeMs = maxResponseDelayMs - minResponseDelayMs + 1;
    const responseDelay = Math.floor(Math.random() * responseDelayRangeMs) + minResponseDelayMs;

    this.autoSubmitResponseTimeoutId = setTimeout(() => {
      const isSuccess = Math.random() < 0.5;

      this.autoSubmitResult$$.set(isSuccess ? VInputAutoSubmitResult.Success : VInputAutoSubmitResult.Error);
      this.autoSubmitStatusText$$.set(isSuccess ? 'Auto submit succeeded' : 'Auto submit failed');

      this.autoSubmitResetTimeoutId = setTimeout(() => {
        this.autoSubmitResult$$.set(null);
      }, 3000);
    }, responseDelay);
  }
}
