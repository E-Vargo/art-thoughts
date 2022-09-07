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
        <p>${this.description}</p>
        <p>${this.medium}</p>
        <img src="${this.photo_url}" width="150" height="150">
        <button class="delete-button" data-id=${this.id} onclick="deleteContribution()">Delete Contribution</button>
        `
    }
}