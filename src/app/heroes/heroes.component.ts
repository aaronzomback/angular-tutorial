import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  selectedHero?: Hero;
  heroes: Hero[] = [];
  
  
  // The parameter simultaneously defines a private heroService property 
  // and identifies it as a HeroService injection site.
  constructor(private heroService: HeroService) { }
  
  ngOnInit() {
    this.getHeroes();
  }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  
  // waits for the Observable to emit the array of heroes—which 
  // could happen now or several minutes from now.
  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
    // The subscribe() method passes the emitted array 
    // to the callback, which sets the component's heroes property.

    // This asynchronous approach will work 
    // when the HeroService requests heroes from the server.
  
  }

  // When Angular creates a HeroesComponent, 
  // the Dependency Injection system sets 
  // the heroService parameter to the singleton instance of HeroService.

}
