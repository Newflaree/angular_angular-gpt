import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-audio-to-text-page',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './audio-to-text-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class AudioToTextPageComponent {

}
