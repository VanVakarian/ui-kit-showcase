import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, ElementRef, signal, viewChild } from '@angular/core';
import { ProgressBarStyle } from '@ui-kit/components/types';
import { IconName } from '@ui-kit/components/v-icon/v-icon';
import { VSlider } from '@ui-kit/components/v-slider/v-slider';

interface SurfaceLevelConfig {
  label: string;
  basePercent: number;
  primaryPercent: number;
}

interface HomeStorageState {
  level0Base: number;
  level0Primary: number;
  level1Base: number;
  level1Primary: number;
  level2Base: number;
  level2Primary: number;
  level3Base: number;
  level3Primary: number;
}

@Component({
  selector: 'tonal-experimental',
  templateUrl: './tonal-experimental.html',
  styleUrl: './tonal-experimental.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgTemplateOutlet, VSlider],
})
export class TonalExperimental {
  protected readonly Icon = IconName;
  protected readonly ProgressBarStyle = ProgressBarStyle;

  protected readonly containerElem = viewChild<ElementRef<HTMLDivElement>>('container');

  protected readonly isDark$$ = signal(false);

  protected readonly percentValues = Array.from({ length: 101 }, (_, i) => i);

  private readonly storageKey = 'home-surface-levels';

  private readonly defaultState: HomeStorageState = {
    level0Base: 2,
    level0Primary: 4,
    level1Base: 2,
    level1Primary: 5,
    level2Base: 2,
    level2Primary: 6,
    level3Base: 2,
    level3Primary: 7,
  };

  private readonly storedState = this.readStoredState();

  protected readonly level0Base$$ = signal(this.storedState?.level0Base ?? this.defaultState.level0Base);
  protected readonly level0Primary$$ = signal(this.storedState?.level0Primary ?? this.defaultState.level0Primary);

  protected readonly level1Base$$ = signal(this.storedState?.level1Base ?? this.defaultState.level1Base);
  protected readonly level1Primary$$ = signal(this.storedState?.level1Primary ?? this.defaultState.level1Primary);

  protected readonly level2Base$$ = signal(this.storedState?.level2Base ?? this.defaultState.level2Base);
  protected readonly level2Primary$$ = signal(this.storedState?.level2Primary ?? this.defaultState.level2Primary);

  protected readonly level3Base$$ = signal(this.storedState?.level3Base ?? this.defaultState.level3Base);
  protected readonly level3Primary$$ = signal(this.storedState?.level3Primary ?? this.defaultState.level3Primary);

  protected readonly baseColor$$ = computed(() => (this.isDark$$() ? 'black' : 'white'));

  protected readonly level0Color$$ = computed(() => {
    const base = this.level0Base$$();
    const primary = this.level0Primary$$();
    return `color-mix(in oklch, ${this.baseColor$$()} ${base}%, var(--v-color-primary-new) ${primary}%)`;
  });

  protected readonly level1Color$$ = computed(() => {
    const base = this.level1Base$$();
    const primary = this.level1Primary$$();
    return `color-mix(in oklch, ${this.baseColor$$()} ${base}%, var(--v-color-primary-new) ${primary}%)`;
  });

  protected readonly level2Color$$ = computed(() => {
    const base = this.level2Base$$();
    const primary = this.level2Primary$$();
    return `color-mix(in oklch, ${this.baseColor$$()} ${base}%, var(--v-color-primary-new) ${primary}%)`;
  });

  protected readonly level3Color$$ = computed(() => {
    const base = this.level3Base$$();
    const primary = this.level3Primary$$();
    return `color-mix(in oklch, ${this.baseColor$$()} ${base}%, var(--v-color-primary-new) ${primary}%)`;
  });

  private readonly detectThemeEffect = effect(() => {
    const container = this.containerElem()?.nativeElement;
    if (!container) return;

    const isDark = container.closest('.dark') !== null;
    this.isDark$$.set(isDark);
  });

  private readonly updateCssVariablesEffect = effect(() => {
    const container = this.containerElem()?.nativeElement;
    if (!container) return;

    container.style.setProperty('--color-surface-level-0', this.level0Color$$());
    container.style.setProperty('--color-surface-level-1', this.level1Color$$());
    container.style.setProperty('--color-surface-level-2', this.level2Color$$());
    container.style.setProperty('--color-surface-level-3', this.level3Color$$());
  });

  private readonly persistStateEffect = effect(() => {
    this.writeStoredState({
      level0Base: this.level0Base$$(),
      level0Primary: this.level0Primary$$(),
      level1Base: this.level1Base$$(),
      level1Primary: this.level1Primary$$(),
      level2Base: this.level2Base$$(),
      level2Primary: this.level2Primary$$(),
      level3Base: this.level3Base$$(),
      level3Primary: this.level3Primary$$(),
    });
  });

  private getStorage(): Storage | null {
    if (typeof window === 'undefined') return null;

    try {
      return window.localStorage;
    } catch {
      return null;
    }
  }

  private readStoredState(): HomeStorageState | null {
    const storage = this.getStorage();
    if (!storage) return null;

    try {
      const raw = storage.getItem(this.storageKey);
      if (!raw) return null;

      const parsed = JSON.parse(raw) as Partial<HomeStorageState>;

      return {
        level0Base: this.normalizePercent(parsed.level0Base, this.defaultState.level0Base),
        level0Primary: this.normalizePercent(parsed.level0Primary, this.defaultState.level0Primary),
        level1Base: this.normalizePercent(parsed.level1Base, this.defaultState.level1Base),
        level1Primary: this.normalizePercent(parsed.level1Primary, this.defaultState.level1Primary),
        level2Base: this.normalizePercent(parsed.level2Base, this.defaultState.level2Base),
        level2Primary: this.normalizePercent(parsed.level2Primary, this.defaultState.level2Primary),
        level3Base: this.normalizePercent(parsed.level3Base, this.defaultState.level3Base),
        level3Primary: this.normalizePercent(parsed.level3Primary, this.defaultState.level3Primary),
      };
    } catch {
      return null;
    }
  }

  private writeStoredState(state: HomeStorageState): void {
    const storage = this.getStorage();
    if (!storage) return;

    try {
      storage.setItem(this.storageKey, JSON.stringify(state));
    } catch {
      return;
    }
  }

  private normalizePercent(value: unknown, fallback: number): number {
    const num = typeof value === 'number' ? value : Number(value);

    if (!Number.isFinite(num)) return fallback;
    if (num < 0) return 0;
    if (num > 100) return 100;

    return Math.round(num);
  }
}
