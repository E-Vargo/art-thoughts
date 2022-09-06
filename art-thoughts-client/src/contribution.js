class Contribution{

    static all = []

    constructor(id, idea_id, photo_url, title, date, description, medium){
        this.id = id
        this.idea_id = idea_id
        this.photo_url = photo_url
        this.title = title
        this.date = date
        this.description = description
        this.medium = medium
        Contribution.all.push(this)
    }

    renderContribution(){
        let contributionDiv = documernt.getElementById("contributions-container")

        contributionDiv.innerHTML +=
        `
        <h3>${this.title}</h3>
        <p>${this.date}</p>
        <p>${this.description}</p>
        <p>${this.medium}</p>
        
        `
    }
}