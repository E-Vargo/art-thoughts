document.addEventListener("DOMContentLoaded", () => {
    createIdeaForm();
    fetchIdeas();
})

const BASE_URL = "http://localhost:3000"

function fetchIdeas(){
    fetch(`${BASE_URL}/ideas`)
    .then(resp => resp.json())
    .then(ideas => {
        for (const idea of ideas){
            
            i = new Idea(idea.id, idea.title, idea.date, idea.category, idea.thoughts)
            i.renderIdea();
        }
    })
}

function createIdeaForm(){
    let ideaForm = document.getElementById("idea-form")

    ideaForm.innerHTML += 
    `
    <form>
        <label for="title">Title:</label>
        <input type="text" id="title">

        <label for="date">Date:</label>
        <input type="date" id="date">

        <label for="category">Category:</label>
        <input type="text" id="category">

        <label for="thoughts">Thoughts:</label>
        <input type="text" id="thoughts">
        
        <input type="submit" value="Create Idea">
    </form>
    `

    ideaForm.addEventListener("submit", ideaFormSubmission)
}

function ideaFormSubmission(){
    event.preventDefault();
    let title = document.getElementById("title").value
    let date = document.getElementById("date").value
    let category = document.getElementById("category").value
    let thoughts = document.getElementById("thoughts").value
    console.log(title, date, category, thoughts)
}

function createIdea(){

}