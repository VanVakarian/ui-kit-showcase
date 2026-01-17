import { Routes } from '@angular/router';
import { VButtonPage } from './components/ui-showcase/pages/v-button/v-button';
import { VCardPage } from './components/ui-showcase/pages/v-card/v-card';
import { VCheckboxPage } from './components/ui-showcase/pages/v-checkbox/v-checkbox';
import { VDropdownPage } from './components/ui-showcase/pages/v-dropdown/v-dropdown';
import { VExpandPage } from './components/ui-showcase/pages/v-expand/v-expand';
import { VIconPage } from './components/ui-showcase/pages/v-icon/v-icon';
import { VInputPage } from './components/ui-showcase/pages/v-input/v-input';
import { VModalPage } from './components/ui-showcase/pages/v-modal/v-modal';
import { VProgressPage } from './components/ui-showcase/pages/v-progress/v-progress';
import { VSliderPage } from './components/ui-showcase/pages/v-slider/v-slider';

export const routes: Routes = [
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
  { path: '', redirectTo: 'v-button', pathMatch: 'full' },
  { path: '**', redirectTo: 'v-button', pathMatch: 'full' },
];
