const categories = [ "Комедии", "Ужасы", "Боевики", "Драма"];
const films = [];

class Comment {
    constructor(text, author, stars) {
        this.stars = stars;
        this.author = author;
        this.text = text;
    }
}
class Film {
    constructor (name, cat) {
        this.name = name;
        this.category = categories[cat];
        this.budget = 0;
        this.expertstars = 3;
        this.comments = [];
    }
    addComment(text,author,stars){
        this.comments.push(new Comment(text, author, stars));
    }
    getAverageStars(){
        let sumStars=0;
        this.comments.forEach(comment => sumStars+=comment.stars);
        return (this.comments.length > 0 ? sumStars / this.comments.length : "Фильм никто не оценил");
    }
}

function getFilmsByCategory(cat) {
    const newFilms = [];
    for (let film of films){
        if (film.category === cat){
            newFilms.push(film);
        }
    }
    return newFilms;
}
films.push(new Film("Титаник", 3));
films.push(new Film("Один дома", 0));
films.push(new Film("Мама", 1));
films.push(new Film("Такси", 2));
films.push(new Film("Такси 2", 2));
films[0].addComment("очень грустный фильм","user123", 4);
films[1].addComment("очень грустный фильм","user1", 5);
films[1].addComment("очень очень грустный фильм","user2", 3);

console.log(getFilmsByCategory("Боевики"));
console.log(films[0].getAverageStars());