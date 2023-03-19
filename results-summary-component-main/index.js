let reaction = document.getElementById('reaction');
let reactionScore = document.getElementById('reaction-score');


let memory = document.getElementById('memory');
let memoryScore = document.getElementById('memory-score')


let verbal = document.getElementById('verbal');
let verbalScore = document.getElementById('verbal-score');


let visual = document.getElementById('visual');
let visualScore = document.getElementById('visual-score');

fetch('./data.json')
.then((response) => response.json())
.then(data => {
    // reaction
    reaction.innerHTML = data[0].category
    reactionScore.innerHTML = data[0].score
    
    // memory
    memory.innerHTML = data[1].category
    memoryScore.innerHTML = data[1].score

    // verbal
    verbal.innerHTML = data[2].category
    verbalScore.innerHTML = data[2].score

    // visual
    visual.innerHTML = data[3].category
    visualScore.innerText = data[3].score


})