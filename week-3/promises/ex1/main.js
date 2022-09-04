/* $.get('https://api.api-ninjas.com/v1/randomword').then(result => console.log(result));
$.get('https://api.api-ninjas.com/v1/sentiment/Ploy').then(result => console.log(result)); */

/* $.get("https://random-word-api.herokuapp.com/word")
.then((word) => {
    console.log(word);
  $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`).then(
    (books) => console.log(books)
  );
});
 */


$.get("https://random-word-api.herokuapp.com/word")
.then((word) => {
    console.log(word);
    let bookPro = $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`);
    let gifPro = $.get(`http://api.giphy.com/v1/gifs/search?q=${word}&api_key=A3OzkIBzBZGOtFzpDdA5xCuxBAHK6HFX`);
    Promise.all([bookPro,gifPro]).then(result => {
        console.log(...result);
        $('#gif').attr('src',result[1].data[0].embed_url);
    })
});
 