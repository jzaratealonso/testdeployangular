import { Component, EventEmitter, Output } from '@angular/core';

import { v4 as uuid } from 'uuid';

import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  character: Character = {
    id: '',
    name: '', 
    power: 0
  };

  emitCharacter():void {
if (this.character.name === '') return;
    this.character.id = uuid();
    this.onNewCharacter.emit(this.character);

    this.character = {id: '', name: '', power:0};
  }
}
