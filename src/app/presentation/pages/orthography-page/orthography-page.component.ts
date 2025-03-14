import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orthography-page',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './orthography-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class OrthographyPageComponent {}
