import { Injectable } from '@angular/core';
import { Question } from '../models/question';
import { Answer } from '../models/answer';

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {
  public questions: Array<Question>;
  private questionId: number;
  constructor() {
    this.questions = [
      new Question(1,"Türkiyenin En büyük furbol takımı kimidir?",100,[
        new Answer(1,"Galatasaray",false),
        new Answer(2,"BEŞİKTAŞ",true),
        new Answer(3,"fenerbahçe",false),
        new Answer(4,"istanbulspor",false),
      ]),
      new Question(2,"Karayip korsanlarında Jonny Depp in adı nedir?",200,[
        new Answer(1,"Jhon Doe",false),
        new Answer(2,"Kevin Mccalister",false),
        new Answer(3,"Captain Jack Sparrow",true),
        new Answer(4,"Indiana Jones",false),
     
      ])
    ];
    this.questionId = 3;
  }
  
  public getAll(): Array<Question>{
    return Array.from(this.questions);
  }
}