class IdeaService {

    constructor(){
        this.endpoint = "http://localhost:3000/ideas"
    }

    getIdeas(){
        return fetch(this.endpoint)
        .then(function(response){
            return response.json
        }).then(function(json) {
                console.log(json)
                console.log(`holy cow`)
        })
    }
}
