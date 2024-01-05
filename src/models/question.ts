import { Answer } from './answer';

export class Question {
    public id: number;
    public text: string;
    public value: number;
    public answers: Array<Answer>;
    constructor(id: number, text: string, value: number, answers: Array<Answer>){
        this.id = id;
        this.text = text;
        this.value = value;
        this.answers = answers;
    }
}