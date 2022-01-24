const arrayFilms = ['Eternos','Encanto','Bios','Infinito','O último duelo']

MovieList();

let buttonSortear = document.getElementById('button_Sortear');
buttonSortear.addEventListener('click',chooseRandonMovie);

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
    for (var i = 0; i < arrayFilms.length; i++) {
      const itensList = document.getElementById('availableMoviesList'); 
      const newMovie = document.createElement('li');
      newMovie.innerHTML = arrayFilms[i];
      itensList.appendChild(newMovie); 
  }
}
 
