const arrayFilms = ['Eternos','Encanto','Bios','Infinito','O último duelo']
let itensList;
const buttonAddMovie = document.getElementById('button_addMovie');
button_addMovie.classList.remove("active");

MovieList();

let buttonSortear = document.getElementById('button_Sortear');
buttonSortear.addEventListener('click',chooseRandonMovie);

button_addMovie.addEventListener('click',addMovie);

Array.prototype.getRandom = function(){
    return this[Math.floor(Math.random()*this.length)];
  }

function chooseRandonMovie (){
    let resultado = arrayFilms.getRandom()
    document.getElementById('resultado').innerHTML = `O filme escolhido é <strong>"${resultado}"</strong>!`;
    buttonSortear.innerHTML = "Sortear novamente?";
}

/*como interligar lista de array existente a lista não ordenada*/
function MovieList() {
    if(addMovie.className == "active"){
      arrayFilms.length = 0;
      console.log(arrayFilms);
    } 
    
      for (var i = 0; i < arrayFilms.length; i++) {
      const itensList = document.getElementById('availableMoviesList'); 
      let newMovie = document.createElement('li');
      newMovie.innerHTML = arrayFilms[i];
      itensList.appendChild(newMovie); 
  }
}

function addMovie(){
  let newMovie = window.prompt("Adicione seu filme,então!");
  arrayFilms.push(newMovie);
  console.log(arrayFilms);
  button_addMovie.className += " active";
  MovieList();
}
 
