import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Vanessa';
  public age: number = 20;


  get capitalizedName(): string {
    return 'Hola mundo';
  }

  getHeroDescription() : string {
    return `${ this.name} - ${ this.age}`;
  }

  chagenHero(): void {
    this.name = 'Isabel'
  }

  chagenAge(): void {
     this.age = 22
  }

  resetForm(): void {
    this.name = 'Vanessa';
    this.age = 20;
  }

}
