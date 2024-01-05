import { Component, OnInit } from '@angular/core';
import { HangmanService } from '../../services/hangman.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hangman',
  standalone: true,
  imports: [FormsModule,CommonModule],
  template: `
  <h1>Adam Asmaca</h1>
  <div *ngIf="!gameOver">
    <p>{{ hiddenWord }}</p>
    <input type="text" [(ngModel)]="guess" (keyup.enter)="checkGuess()" [disabled]="isDiabled" />
    <p *ngIf="errorMesssage">{{ errorMesssage }}</p>
  </div>
  <p *ngIf="gameOver">Oyun Bitti. Doğru kelime: {{ selectedWord }}</p>
`,
  styleUrl: './hangman.component.scss'
})
export class HangmanComponent implements OnInit {
  selectedWord:string='';
  hiddenWord:string='';
  guess:string='';
  errorMesssage:string='';
  isDiabled:boolean=false;
  gameOver:boolean=false;

  constructor(private hangmanService:HangmanService){}
  ngOnInit(): void {
    this.selectedWord=this.hangmanService.getRandomWord();
    this.hiddenWord='_'.repeat(this.selectedWord.length)
  }

  checkGuess():void{
    if(this.guess.length !==1){
      this.errorMesssage='Sadece 1 harf giriniz';
      return;
    }
    const guessIndex=this.selectedWord.indexOf(this.guess);
    if(guessIndex !== -1){
  
      this.updateHiddenWorld(guessIndex);
      this.checkWin();
  
  
    }else{
      this.errorMesssage='Yanlış Tahmin'
    }
    this.guess='';
  }
 
  updateHiddenWorld(index:number):void{
    const updateWord=this.hiddenWord.split('');
    updateWord[index]=this.guess;
    this.hiddenWord=updateWord.join('');
  }
  checkWin(){
    if(!this.hiddenWord.includes('_')){
      this.gameOver=true;
    }
  }
  

}
