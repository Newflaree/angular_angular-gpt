import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
  ChatMessageComponent,
  MyMessageComponent,
  TextMessagesBoxComponent,
  TypingLoaderComponent
} from '@components/index';
import { OpenAiService } from '../../presentation//services/openai.service';
import { Message } from '@interfaces/message.interface'

@Component({
  selector: 'app-chat-template',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ChatMessageComponent,
    MyMessageComponent,
    TypingLoaderComponent,
    TextMessagesBoxComponent,
  ],
  templateUrl: './chat-template.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatTemplateComponent {
  public messages = signal<Message[]>([]);
  public isLoading = signal(false);
  public openAiService = inject( OpenAiService );

  handleMessage( prompt: string ) {
    console.log({ prompt });
  }
}
