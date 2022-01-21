const arrayFilms = ['Eternos','Encanto','Bios','Infinito','O último duelo']

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






