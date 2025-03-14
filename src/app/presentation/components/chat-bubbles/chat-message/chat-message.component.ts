import {
  ChangeDetectionStrategy,
  Component,
  Input
} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-chat-message',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './chat-message.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatMessageComponent {
  @Input({ required: true }) text!: string;
}
