// Your code here
let animals = [];
let selctedAnimal = null;
fetchAnimals();
function fetchAnimals(){
      fetch("http://localhost:3000/characters", {
        method: 'GET',
       
      })
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            animals = data;
            characterBarAnimals();
    
        });

}
function characterBarAnimals(){
    let bar = document.getElementById("character-bar");
    // console.log(bar);
    // console.log(animals);

    let str = "";
    for (let i = 0; i < animals.length; i++) {
        let animal = animals[i];
        console.log(animal);
        str = str + `<span onclick="displayAnimal('${i}')" id="${animal.id}">${animal.name}</span>`
    }

    bar.innerHTML = str;
    displayAnimal(0);
}

function displayAnimal(id) {
    // console.log(id);
    let animal = animals[id];
    selctedAnimal = id;
    let charName = document.getElementById("name");
    let charImg = document.getElementById("image");
    let charVote = document.getElementById("vote-count");

    charName.innerText = animal.name;
    charImg.src = animal.image;
    charVote.innerText = animal.votes;
}



  let votesForm = document.getElementById("votes-form");

  votesForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let votesInput = document.getElementById("votes");
    let votes = parseInt(votesInput.value);

    if (!votes) return;

    let animal = animals[selctedAnimal];
    animal.votes = votes + animal.votes;
    displayAnimal(selctedAnimal);
    votesInput.value = "";
  });

   let resetBtn = document.getElementById("reset-btn");

   resetBtn.addEventListener("click",function(){
    // console.log("Reset Btn Clicked");
    let animal = animals[selctedAnimal];
    animal.votes = 0;
    displayAnimal(selctedAnimal);
   })