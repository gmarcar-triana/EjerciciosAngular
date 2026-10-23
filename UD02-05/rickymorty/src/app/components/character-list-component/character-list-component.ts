import { Component, inject, OnInit, signal } from '@angular/core';
import { CharacterService } from '../../services/character-service';
import { Character } from '../../interfaces/character-list-response';
import { CharacterItemComponent } from '../character-item-component/character-item-component';

@Component({
  imports: [CharacterItemComponent],
  selector: 'app-character-list-component',
  styleUrl: './character-list-component.css',
  templateUrl: './character-list-component.html',
})
export class CharacterListComponent implements OnInit {

  characterService = inject(CharacterService);
  characterList = signal<Character[]>([]);

  ngOnInit(): void {
    this.characterService.getAllCharacter().subscribe(resp => {
      this.characterList.set(resp.results);
    })
  }  
}
