import { Component } from '@angular/core';
import { Joker } from '../../models/joker';
import { Answer } from '../../models/answer';
import { QuestionServiceService } from '../../services/question.service';
import { Question } from '../../models/question';
import { JokerService } from '../../services/joker.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-millionaire',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './millionaire.component.html',
  styleUrl: './millionaire.component.scss'
})
export class MillionaireComponent {
  title = 'millionaire-app';
  public hasGameStarted = false;
  public hasGameEnded = false;
  private questionService: QuestionServiceService;
  private jokerService: JokerService;
  public questions: Array<Question>;
  public jokers: Array<Joker>;
  public sum: number = 0;
  public counter: number = 0;

  constructor(questionService: QuestionServiceService, jokerService: JokerService) {
    this.questionService = questionService;
    this.jokerService = jokerService;
    this.questions = this.questionService.getAll();
    this.jokers = this.jokerService.getAll();
  }

  public startGame(): void {
    this.hasGameStarted = true;
  }

  public checkAnswer(answer: Answer): void {
    if (answer.isCorrect) {
      this.sum += this.questions[this.counter].value;
      if (this.counter === this.questions.length - 1) {
        this.hasGameEnded = true;

      }
      else {
        this.counter++;
      }
    }
    else {
      this.hasGameEnded = true;
    }
  }

  public goBack(): void {
    this.hasGameStarted = false;
    this.hasGameEnded = false;
    this.counter = 0;
    this.sum = 0;

  }
  public getRightAnswer(): Answer {
    return this.questions[this.counter].answers.filter(q => q.isCorrect)[0];
  }

  public useJoker(joker: Joker): void {
    this.jokerService.remove(joker.id);
    this.jokers = this.jokerService.getAll();

    switch (joker.jokerTitle) {
      case "50/50": {
        for (let i = 0; i < 2; i++) {
          let wrongAnswers = this.questions[this.counter].answers.filter(q => !q.isCorrect);
          let random = Math.floor((Math.random() * wrongAnswers.length));
          console.log(random);
          this.questions[this.counter].answers = this.questions[this.counter].answers.filter(q => q.id !== wrongAnswers[random].id);
        }
        break;
      }
      case "Crowd help": {
        alert("The right answer is :" + this.getRightAnswer().text);
        break;
      }
      case "Call to friend": {
        alert("The right answer is :" + this.getRightAnswer().text);
        break;
      }
    }
  }
}