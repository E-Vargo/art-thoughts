//global---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
 eventListeners();
})

function ideasPage(){
    hideEnter();
    hideIdeas();
    hideContributions();
    fetchIdeas();
    createIdeaForm();
    
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

function makeHomeButton(){
    let e = document.getElementById("enter-container")
    e.innerHTML = `<button class="btn btn-outline-dark" id="see-all" onclick="ideasPage()">Home</button>`
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
    <div class="mb-3">
        <label for="title" class="form-label">Title:</label>
        <input class="form-control" type="text" id="title">
        </div>
        <div class="mb-3">
        <label for="date" class="form-label">Date:</label>
        <input class="form-control" type="date" id="date">
        </div>
        <div class="mb-3">
        <label for="category" class="form-label">Category:</label>
        <input class="form-control" type="text" id="category">
        </div>
        <div class="mb-3">
        <label for="thoughts" class="form-label">Thoughts:</label>
        <input class="form-control" type="text" id="thoughts">
        </div>
        <input class="btn btn-outline-success" type="submit" value="Create Idea">
       
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

    ideasPage();
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
    makeHomeButton();
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
    <div class="mb-3">
        <label for="medium" class="form-label">Medium:</label>
        <input type="text" id="medium" class="form-control">
        </div>
        <div class="mb-3">
        <label for="description" class="form-label">Description:</label>
        <input type="text" id="description" class="form-control">
        </div>
        <div class="mb-3">
        <label for="photo_url" class="form-label">Image URL:</label>
        <input type="text" id="photo_url" class="form-control">
        </div>
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

    
    contributionsPage();
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


