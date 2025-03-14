import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashoboard-layout',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './dashoboard-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashoboardLayoutComponent {

}
