/* const fetch =(Isbn)=>{
  $.ajax({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${Isbn}`,
    success: function(data) {
      console.log(data.items[0].volumeInfo.title);
    }
  })
}

fetch(9780575087057) */

/* const fetch =(queryType,queryValue)=>{
  $.ajax({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
    success: function(data) {
      console.log(data);
    }
  })
}

fetch("title", "The Wise Man's Fears")
fetch("title", "How to Win Friends and Influence People") */

const fetch = (queryType, queryValue) => {
  $.ajax({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
    success: function (data) {
      data.items.forEach((book) => {
        const title = book.volumeInfo.title;
        const authors = book.volumeInfo.authors || [];
        const isbn = book.volumeInfo.industryIdentifiers.map(
          (i) => i.identifier
        );
        console.log(title, ...authors, ...isbn);
      });
    },
  });
};

fetch("title", "The Wise Man's Fears");

    $.ajax({
      method: "GET",
      url: "http://api.giphy.com/v1/gifs/search?q=cats&api_key=A3OzkIBzBZGOtFzpDdA5xCuxBAHK6HFX",
      success: function (data) {
          console.log(data);
        }
      })

      const fetchCats = () => {
        const value = $('input').val();
        $.ajax({
          method: "GET",
          url: `http://api.giphy.com/v1/gifs/search?q=${value}&api_key=A3OzkIBzBZGOtFzpDdA5xCuxBAHK6HFX`,
          success: function (data) {
            console.log(data.data[0])
               $('#gif').attr("src",data.data[0].embed_url) ;
            }
          })
      }

      $('button').click(fetchCats);