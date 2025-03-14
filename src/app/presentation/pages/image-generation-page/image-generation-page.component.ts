import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-generation-page',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './image-generation-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ImageGenerationPageComponent {

}
