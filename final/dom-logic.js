
const openedFilms = {};

document.addEventListener("DOMContentLoaded", function(){
    for(let category of categories) {
        const newEl = document.createElement("div");
        newEl.classList.add("category");
        newEl.innerText= category;
        newEl.addEventListener("click", function (){
            onCategoryChoice(category);
        });
        document.querySelector(".categories").appendChild(newEl);
    }
});

function getFilmComments(filmName) {
    const film = films.filter(f => f.name === filmName)[0];
    return film.comments;
}

function openFilmCart(film, newEl) {
    const comments = getFilmComments(film.name);
    let s = "";
    comments.forEach( c => {
        s+= '<div class="comment"><span class="comment-author">' + c.author + '</span>:' + c.text + '</div>';
    });
    newEl.innerHTML += '<div class ="film-comments">' + s + '</div>';
    const addCommentButton = document.createElement("button");
    addCommentButton.innerText = "Добавить отзыв";
    newEl.appendChild(addCommentButton);
}

function onFilmClick(film,newEl) {
    if (openedFilms.hasOwnProperty(film.name) && openedFilms[film.name] === true ){
        newEl.innerHTML = '<div class ="film-name">'+film.name+'</div>';
        openedFilms[film.name] = false;}
        else{
        openFilmCart(film, newEl);
        openedFilms[film.name] = true;
    }
}

function renderFilm(film) {
    const newEl = document.createElement("div");
    newEl.classList.add("film");
    newEl.innerHTML = '<div class ="film-name">' +film.name + '</div>';
    document.querySelector(".films").appendChild(newEl);
    newEl.addEventListener("click",function(){
        onFilmClick(film, newEl);
    });
}

function onCategoryChoice(categoryName){
    document.querySelector(".films").innerHTML = "";
    const films = getFilmsByCategory(categoryName);
    for (let film of films) {
        renderFilm(film);
    }
}