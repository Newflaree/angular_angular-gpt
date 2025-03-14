import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-translate-page',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './translate-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class TranslatePageComponent {

}
