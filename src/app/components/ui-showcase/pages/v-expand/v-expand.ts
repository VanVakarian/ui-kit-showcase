import { ChangeDetectionStrategy, Component } from '@angular/core';
import { VButtonOld } from '@ui-kit/components/v-button/v-button-old';
import { AccordionDirective } from '@ui-kit/components/v-expand/accordion.directive';
import { VExpand } from '@ui-kit/components/v-expand/v-expand';
import { InnerShadowRoundedDirective, OuterShadowRoundedDirective } from '@ui-kit/directives/shadow.directive';

@Component({
  selector: 'v-expand-page',
  templateUrl: './v-expand.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [VExpand, VButtonOld, AccordionDirective, OuterShadowRoundedDirective, InnerShadowRoundedDirective],
})
export class VExpandPage {
  protected isHiddenPanelExpanded = false;

  protected toggleHiddenPanel(): void {
    this.isHiddenPanelExpanded = !this.isHiddenPanelExpanded;
  }
}
