import { Injectable } from '@angular/core';
import { Joker } from '../models/joker';

@Injectable({
  providedIn: 'root'
})
export class JokerService {

  public jokers: Array<Joker>;
  private jokerId: number;

  constructor() {
    this.jokers = [
      new Joker(1,'50/50'),
      new Joker(2,'Crowd help'),
      new Joker(3,'Call to friend')
    ];
    this.jokerId = 4;
   }
   
   public getAll(): Array<Joker>{
     return Array.from(this.jokers);
   }
   public remove(id: number){
     this.jokers = this.jokers.filter(j => j.id !== id);
   }
}