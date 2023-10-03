characterName = document.getElementById('name')
const characterImage = document.getElementById('image')
const characterVotes = document.getElementById('vote-count')
function displayNames(arr){
    const namesHtml = arr.map(character=>{
        return `<span onclick="getCharacterData(${character.id})">${character.name}</span>`
    })
    characterBar.innerHTML = namesHtml.join('')
}

function displayDetails(obj){
    const {name,
characterName.textContent = name
    characterImage.setAttribute('src',image)
    characterVotes.textContent = votes
}

function getCharacterData(id = 1){
    fetch(`http://localhost:3000/characters/${id}`)
        .then(res => res.json())
        .then(data => displayDetails(data))
}

function getData(){
    fetch('http://localhost:3000/characters')
        .then(res => res.json())
        .then(data => displayNames(data))
}

document.addEventListener('DOMContentLoaded', ()=>{
    getData()
    getCharacterData()
})
const addVotes = document.getElementById("votes-form")
addVotes.addEventListener("submit",(e)=>{
    e.preventDefault()
    const inputVotes = parseInt(document.getElementById('votes').value )+ parseInt(characterVotes.innerText)
    characterVotes.innerText = inputVotes
})