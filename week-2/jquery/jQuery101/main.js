
//spot check 2
$('h1').css('color', 'blue');
$('.red-div').css('color', 'red');
$("li:first-child").css("background-color", "green")
$("li:last-child").css("background-color", "pink")
$('#brown-div').css('color', 'brown');

//spot check 3

$('#b1').addClass("box");
$('#b2').addClass("box");

//spot check 4

$('#my-input').val('Terabyte')

//spot check 5
const data = $("#barcode").data()
console.log(data.barcode, data.expirationdate) 


// spot check 6

$('#b2').hover( function(){ $(this).css('background-color','grey')});

// spot check 7

$('#click').click( function(){ alert($('#my-input').val())})

// spot check 8

$('.box').hover( function(){ $(this).css('background-color','blue')});

// spot check 9

$(".feedme").on("click", function(){

    let divCopy = `<div>${$(this).html()}</div>`;
   
    $("body").append(divCopy)
  })

  //spot check 10

  const names = [
    { first: "Alex", last: "Johnson" },
    { first: "Byron", last: "Loveall" },
    { first: "Cassandra", last: "Wuthers" },
    { first: "Deandre", last: "Rahm" },
    { first: "Ellena", last: "Freeman" }
  ]

  for(let name of names){
    $("body").append(`<p>${name.first.toUpperCase()}-${name.last.toUpperCase()}</p>`)
  }

  //spot check 11

  $('.feedme').hover(function() {$(this).remove()});

    //spot check 12

    $('#post').click(function(){
        $('#blogs').append(`<div class="blog">Same text</div>`)
      })
    
      $("#blogs").on("click", function(){
        $('.blog').text("blargh") 
      })
  //spot check 13

 /*  $('#post').click(function(){
    $('#blogs').append(`<div class="blog">Same text</div>`)
  })

  $("#blogs").on("click",".blog", function(){
    $(".blog").text("blargh") 
  }) */