import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { VButton } from '@ui-kit/components/v-button/v-button';
import { VAccordion } from '@ui-kit/components/v-expand/v-accordion';
import { VExpand } from '@ui-kit/components/v-expand/v-expand';

@Component({
  selector: 'v-expand-page',
  templateUrl: './v-expand.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgTemplateOutlet, VExpand, VButton, VAccordion],
})
export class VExpandPage {
  protected isHiddenPanelExpanded = false;

  protected toggleHiddenPanel(): void {
    this.isHiddenPanelExpanded = !this.isHiddenPanelExpanded;
  }
}
