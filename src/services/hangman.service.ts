import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HangmanService {

  private words:string[]=['angular', 'typescript', 'javascript', 'programming', 'computer'];
  constructor() { }
 getRandomWord():string{
          const randomIndex=Math.floor(Math.random())*(this.words.length);

          return this.words[randomIndex]

  
 }

}
