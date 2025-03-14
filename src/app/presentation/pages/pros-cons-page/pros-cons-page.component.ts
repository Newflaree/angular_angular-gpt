import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pros-cons-page',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './pros-cons-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ProsConsPageComponent {

}
