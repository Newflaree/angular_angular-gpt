import {
  ChangeDetectionStrategy,
  Component,
  signal
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ChatMessageComponent,
  MyMessageComponent,
  TextMessagesBoxComponent,
  TextMessagesBoxFileComponent,
  TextMessagesBoxSelectComponent,
  TextMessageEvent,
  TextMessageBoxEvent,
  TypingLoaderComponent
} from '@components/index';
import { Message } from '@interfaces/message.interface'

@Component({
  selector: 'app-orthography-page',
  standalone: true,
  imports: [
    CommonModule,
    ChatMessageComponent,
    MyMessageComponent,
    TextMessagesBoxComponent,
    TextMessagesBoxFileComponent,
    TextMessagesBoxSelectComponent,
    TypingLoaderComponent,
  ],
  templateUrl: './orthography-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class OrthographyPageComponent {
  public messages = signal<Message[]>([{ text: 'Hola Mundo', isGpt: true }]);
  public isLoading = signal(false);

  handleMessage( prompt: string ) {
    console.log({ prompt });
  }

  handleMessageWithFile( { prompt, file }: TextMessageEvent ) {
    console.log({ prompt, file });
  }

  handleMessageWithSelect( event: TextMessageBoxEvent ) {
    console.log( event );
  }
}
