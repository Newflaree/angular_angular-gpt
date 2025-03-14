import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-tunning-page',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './image-tunning-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ImageTunningPageComponent {

}
