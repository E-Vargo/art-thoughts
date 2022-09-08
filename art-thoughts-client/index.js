//global---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
 eventListeners();
})

function ideasPage(){
    hideEnter();
    hideIdeas();
    hideContributions();
    createIdeaForm();
    fetchIdeas();
}

function contributionsPage(){
    hideContributions();
    fetchContributions();
    createContributionForm();
}

function hideEnter(){
    let e = document.getElementById("enter-container")
    e.innerHTML = ``
}

const BASE_URL = "http://localhost:3000"

//idea---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function fetchIdeas(){
    fetch(`${BASE_URL}/ideas`)
    .then(resp => resp.json())
    .then(ideas => {
        for (const idea of ideas){
            
            let i = new Idea(idea.id, idea.title, idea.date, idea.category, idea.thoughts)
            i.renderIdea();
        }
    })
}

function createIdeaForm(){
    let ideaForm = document.getElementById("idea-form")

    ideaForm.innerHTML = 
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
    

    let idea = {
        title: title,
        date: date,
        category: category,
        thoughts: thoughts
    }

    fetch("http://localhost:3000/ideas", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(idea)
        
    })
    .then(resp => resp.json())
    .then(idea => {
        let i = new Idea(idea.id, idea.title, idea.date, idea.category, idea.thoughts)
        i.renderIdea();
    })
    
}

function deleteIdea(){
    let ideaId = parseInt(event.target.dataset.id)

    fetch(`${BASE_URL}/ideas/${ideaId}`, {
        method: 'DELETE'
    })

    this.location.reload()
}

//view logic
function hideIdeas(){
    
    let ideaDiv = document.getElementById("ideas-container")
    let ideaForm = document.getElementById("idea-form")

    ideaDiv.innerHTML = ``
    ideaForm.innerHTML = ``
}

function viewIdea(){
    let ideaId = parseInt(event.target.dataset.id)
    let i = Idea.all.find(i => i.id == ideaId)
    hideIdeas();
    i.renderIdea();
    contributionsPage();
    
}

//contribution------------------------------------------------------------------------------------------------------------------------------------------------------------------
function fetchContributions(){
    fetch(`${BASE_URL}/contributions`)
    .then(resp => resp.json())
    .then(contributions => {
            let ideaName = document.getElementById("idea-name").innerHTML;
            let idea = Idea.all.find(i => i.title === ideaName);
        for (const contribution of contributions){
             if (contribution.idea_id === idea.id) {
            let c = new Contribution(contribution.id, contribution.idea_id, contribution.photo_url, contribution.description, contribution.medium)
            c.renderContribution();
             }
        }
    })
}

function createContributionForm(){
    let contributionForm = document.getElementById("contribution-form")

    contributionForm.innerHTML = 
    `
    <form>
       <!-- <label for="idea_name">Which idea are you building on?:</label>
        <select id="idea_name">
            <option>Fishy</option>
            <option>Spookersons</option>
        </select>-->

        <label for="medium">Medium:</label>
        <input type="text" id="medium">

        <label for="description">Description:</label>
        <input type="text" id="description">

        <label for="photo_url">Image URL:</label>
        <input type="text" id="photo_url">
        
        <input type="submit" value="Create Contribution">
    </form>
    `

    contributionForm.addEventListener("submit", contributionFormSubmission)
}

function contributionFormSubmission(){
    event.preventDefault();

    let idea_name = document.getElementById("idea-name").innerHTML
    let idea_id = Idea.all.find(i => i.title === idea_name).id

    let photo_url = document.getElementById("photo_url").value
    let description = document.getElementById("description").value
    let medium = document.getElementById("medium").value
    

    let contribution = {
        idea_id: idea_id,
        photo_url: photo_url,
        description: description,
        medium: medium
    }

    fetch("http://localhost:3000/contributions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(contribution)
        
    })
    .then(resp => resp.json())
    .then(contribution => {
        let c = new Contribution(contribution.id, contribution.idea_id, contribution.photo_url, contribution.description, contribution.medium)
            c.renderContribution();
    })
    
}

function deleteContribution(){
    let contributionId = parseInt(event.target.dataset.id)

    fetch(`${BASE_URL}/contributions/${contributionId}`, {
        method: 'DELETE'
    })

    this.location.reload()
}

//view logic 

function hideContributions(){
    
    let contributionDiv = document.getElementById("contributions-container")
    let contributionForm = document.getElementById("contribution-form")

    contributionDiv.innerHTML = ``
    contributionForm.innerHTML = ``
}


//eventListeners

function eventListeners(){
   let see = document.getElementById("see-all");
   //let hide = document.getElementById("hide-all");

    see.addEventListener("click", function(event){
        ideasPage();
    });

   // hide.addEventListener("click", function(event){
    //    hideIdeas();
    //    viewIdea();
   // });
}


