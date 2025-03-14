import {
  ChangeDetectionStrategy,
  Component,
  Input
} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-my-message',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './my-message.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyMessageComponent {
  @Input({ required: true }) text!: string;
}
