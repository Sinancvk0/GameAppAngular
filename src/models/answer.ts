export class Answer{
    public id: number;
    public text: string;
    public isCorrect: boolean;
    constructor(id: number, text: string, isCorrect: boolean){
        this.id = id;
        this.text = text;
        this.isCorrect = isCorrect;
    }
}