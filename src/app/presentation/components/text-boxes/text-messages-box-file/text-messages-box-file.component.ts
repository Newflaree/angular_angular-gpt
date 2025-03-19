import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Input,
  Output
} from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';


export interface TextMessageEvent {
  file: File;
  prompt?: string | null;
}

@Component({
  selector: 'app-text-messages-box-file',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './text-messages-box-file.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextMessagesBoxFileComponent {
  @Input() placeholder: string = '';
  @Input() disableCorrections: boolean = false;
  @Output() onMessage = new EventEmitter<TextMessageEvent>();

  public fb = inject(FormBuilder);
  public form = this.fb.group({
    prompt: [],
    file: [null, Validators.required]
  });
  public file: File | undefined;

  handleSelectedFile( event: any ) {
    const file = event.target.files[0];
    this.form.controls.file.setValue(file);
  }

  handleSubmit() {
    if ( this.form.invalid ) return;


    const { prompt, file } = this.form.value;
    this.onMessage.emit({ prompt, file: file! });
    this.form.reset();
  }
}
