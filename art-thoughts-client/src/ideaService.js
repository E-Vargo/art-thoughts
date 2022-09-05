class IdeaService {

    constructor(){
        this.endpoint = "http://localhost:3000/ideas"
    }

     getIdeas(){
        return fetch(this.endpoint)
        .then(resp => resp.json())
        .then(ideas => {
            
                ideas.data.array.forEach(element => {
                    const newIdea = new Idea(element, element.attributes)
                })
            }
    }
}
