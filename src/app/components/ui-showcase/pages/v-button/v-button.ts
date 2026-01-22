import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { VButton } from '@ui-kit/components/v-button/v-button';
import { IconName, VIcon } from '@ui-kit/components/v-icon/v-icon';

@Component({
  selector: 'v-button-page',
  templateUrl: './v-button.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgTemplateOutlet, VButton, VIcon],
})
export class VButtonPage {
  protected readonly Icon = IconName;

  protected readonly buttonStyles = [
    { class: 'v-link', label: '.v-link' },
    { class: 'v-flat', label: '.v-flat' },
    { class: 'v-raised', label: '.v-raised' },
  ];

  protected readonly buttonRoles = [
    { class: '', label: '-' },
    { class: 'v-primary', label: '.v-primary' },
    { class: 'v-accent', label: '.v-accent' },
    { class: 'v-danger', label: '.v-danger' },
    { class: 'v-primary v-hover', label: '.v-primary .v-hover' },
  ];
}
