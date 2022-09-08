class Contribution{

    static all = []

    constructor(id, idea_id, photo_url, description, medium){
        this.id = id
        this.idea_id = idea_id
        this.photo_url = photo_url
        this.description = description
        this.medium = medium
        Contribution.all.push(this)
    }

    renderContribution(){
        let contributionDiv = document.getElementById("contributions-container")

        contributionDiv.innerHTML +=
        `
        <div class="card" style="width: 18rem;">
        <img src="${this.photo_url}" class="card-img-top">
        <div class="card-body">
        <p class="card-text">${this.description}</p>
        <p class="card-text">${this.medium}</p>
        
        <button class="btn btn-outline-secondary" data-id=${this.id} onclick="deleteContribution()">Delete Contribution</button>
        </div>
        
        </div>
        `
    }
}