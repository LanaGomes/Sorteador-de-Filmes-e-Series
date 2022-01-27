const arrayFilms = ['Eternos','Encanto','Bios','Infinito','O último duelo','Baby',"Blue"]
let itensList;
const button_addMovie = document.getElementById('button_addMovie');
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
  // remover todos os itens da lista não ordenada
  // pra isso, recuperamos o elemento da lista
  const itensList = document.getElementById('availableMoviesList'); 
  //agora, removemos todos os nós dentro dele
  itensList.querySelectorAll('*').forEach(node => node.remove());

  for (var i = 0; i < arrayFilms.length; i++) {
    let newMovie = document.createElement('li');
    newMovie.innerHTML = arrayFilms[i];
    itensList.appendChild(newMovie); 
  }
}

function addMovie(){
  let newMovie = window.prompt("Adicione seu filme, então!");
  // caso o usuário não insira um texto, não adicionamos o filme no array
  // o return fará com que o método seja interrompido
  // !newMovie = newMovie != '' && newMovie != undefined && newMovie != null
  if(!newMovie) return

  arrayFilms.push(newMovie);
  MovieList();
}
 