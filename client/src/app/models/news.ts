export class News {
    private title: string;
    private date: Date;
    private content: string;

    constructor(title: string, date: Date, content: string){
        this.title = title;
        this.date = date;
        this.content = content;
    }

    getTitle(){
        return this.title;
    }

    getContent(){
        return this.content;
    }

    getDate(){
        return this.date;
    }
}
