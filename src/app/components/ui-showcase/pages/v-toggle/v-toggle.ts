import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { VToggle, VToggleItem } from '@ui-kit/components/v-toggle/v-toggle';

@Component({
  selector: 'v-toggle-page',
  templateUrl: './v-toggle.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgTemplateOutlet, VToggle],
})
export class VTogglePage {
  protected readonly transactionOptions: VToggleItem[] = [
    { id: 'income', label: 'Income' },
    { id: 'expense', label: 'Expense' },
    { id: 'transfer', label: 'Transfer' },
  ];

  protected readonly sizeOptions: VToggleItem[] = [
    { id: 's', label: 'Small' },
    { id: 'm', label: 'Medium' },
    { id: 'l', label: 'Large' },
  ];

  protected readonly viewOptions: VToggleItem[] = [
    { id: 'list', label: 'List' },
    { id: 'grid', label: 'Grid' },
    { id: 'board', label: 'Board', isDisabled: true },
  ];

  protected readonly filterOptions: VToggleItem[] = [
    { id: 'design', label: 'Design' },
    { id: 'dev', label: 'Dev' },
    { id: 'qa', label: 'QA' },
    { id: 'pm', label: 'PM' },
  ];

  protected readonly singleSelection$$ = signal<string[]>(['m']);
  protected readonly transactionSelection$$ = signal<string[]>(['income']);
  protected readonly viewSelection$$ = signal<string[]>(['grid']);
  protected readonly multiSelection$$ = signal<string[]>(['design', 'qa']);
  protected readonly disabledSelection$$ = signal<string[]>(['s']);
}
