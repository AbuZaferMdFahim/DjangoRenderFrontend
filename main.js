let projectUrl = 'http://127.0.0.1:8000/api/projects/'

let getProjects = () =>{
    fetch(projectUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            buildProject(data)
        })
}

let buildProject = (projects) => {
    let projectwrapper = document.getElementById('project--wrapper')

    for(let i=0;projects.length>i;i++){
        let project = projects[i]
        
        let projectcard = `
                <div class = "project--card">
                    <img src = "http://127.0.0.1:8000${project.featured_image}"/>

                    <div>
                        <div class = "card--header">
                            <h3> ${project.title} </h3>
                            <strong class = "vote--option"> &#43;</strong>
                            <strong class = "vote--option"> &#8722;</strong>
                        </div>
                        <i>${project.vote_Ratio}% positive feedback </i>
                        <p>${project.description.substring(0,150)}</p> 
                    </div>

                </div>
        `
        projectwrapper.innerHTML += projectcard
    }
}

getProjects()