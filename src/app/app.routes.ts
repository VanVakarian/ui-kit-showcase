import { Routes } from '@angular/router';
import { TonalExperimental } from '@app/components/ui-showcase/pages/tonal-experimental/tonal-experimental';
import { VButtonPage } from '@app/components/ui-showcase/pages/v-button/v-button';
import { VCardPage } from '@app/components/ui-showcase/pages/v-card/v-card';
import { VCheckboxPage } from '@app/components/ui-showcase/pages/v-checkbox/v-checkbox';
import { VDropdownPage } from '@app/components/ui-showcase/pages/v-dropdown/v-dropdown';
import { VExpandPage } from '@app/components/ui-showcase/pages/v-expand/v-expand';
import { VIconPage } from '@app/components/ui-showcase/pages/v-icon/v-icon';
import { VInputPage } from '@app/components/ui-showcase/pages/v-input/v-input';
import { VModalPage } from '@app/components/ui-showcase/pages/v-modal/v-modal';
import { VProgressPage } from '@app/components/ui-showcase/pages/v-progress/v-progress';
import { VSliderPage } from '@app/components/ui-showcase/pages/v-slider/v-slider';

export type PagePath = (typeof pages)[number]['path'];

export const pages = [
  { path: 'v-button', component: VButtonPage },
  { path: 'v-checkbox', component: VCheckboxPage },
  { path: 'v-input', component: VInputPage },
  { path: 'v-card', component: VCardPage },
  { path: 'v-dropdown', component: VDropdownPage },
  { path: 'v-expand', component: VExpandPage },
  { path: 'v-icon', component: VIconPage },
  { path: 'v-modal', component: VModalPage },
  { path: 'v-progress', component: VProgressPage },
  { path: 'v-slider', component: VSliderPage },
  { path: 'tonal-exp', component: TonalExperimental },
] as const;

export const routes: Routes = [
  ...pages.map((p) => ({ path: p.path, component: p.component })),
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
