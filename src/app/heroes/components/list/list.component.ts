import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];
  lastHeroRemoved? = '';

  removeLastHero():void {    
    this.lastHeroRemoved = this.heroNames.pop();
  }
}
