class Idea {

    static all = []

    const ideasTest = document.getElementById('ideas-container')

    constructor({id, title, date, category, thoughts}){
        this.id = id
        this.title = title 
        this.date = date 
        this.category = category 
        this.thoughts = thoughts
        Idea.all.push(this)
    }

    

}