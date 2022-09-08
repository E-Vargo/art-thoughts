class Idea {

    static all = []

    constructor(id, title, date, category, thoughts){
        this.id = id
        this.title = title 
        this.date = date 
        this.category = category 
        this.thoughts = thoughts
        Idea.all.push(this)
    }

    renderIdea(){
        let ideaDiv = document.getElementById("ideas-container")

        ideaDiv.innerHTML +=
        `
        <h1 id="idea-name">${this.title}</h1
        <p>${this.date}</p>
        <p>${this.category}</p>
        <p>${this.thoughts}</p>
        <button  class="btn btn-outline-info" id="hide-all" data-id=${this.id} onclick="viewIdea()">Detail Page</button>
        <button class="btn btn-outline-secondary" data-id=${this.id} onclick="deleteIdea()">Delete Idea</button>
        `
    }


}