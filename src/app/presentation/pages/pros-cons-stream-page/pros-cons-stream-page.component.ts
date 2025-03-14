import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pros-cons-stream-page',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './pros-cons-stream-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ProsConsStreamPageComponent {

}
