import {
  ChangeDetectionStrategy,
  Component,
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
