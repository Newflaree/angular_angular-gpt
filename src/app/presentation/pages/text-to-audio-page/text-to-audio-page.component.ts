import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-text-to-audio-page',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './text-to-audio-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class TextToAudioPageComponent {

}
