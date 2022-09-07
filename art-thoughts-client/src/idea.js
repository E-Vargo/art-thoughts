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
        <h1>${this.title}</h1
        <p>${this.date}</p>
        <p>${this.category}</p>
        <p>${this.thoughts}</p>
        <!-- <button class="button" data-id=${this.id} onclick="viewIdea()">Detail Page</button> stretch feature to be incorporated later?-->
        <button class="delete-button" data-id=${this.id} onclick="deleteIdea()">Delete Idea</button>
        `
    }


    hideIdeas(){
    
        let ideaDiv = document.getElementById("ideas-container")

        ideaDiv.innerHTML = ``
    }

}