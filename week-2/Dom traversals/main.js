/* $('button').on('click', function() {
  let relevantSpan = $(this).closest("div").find("span").text()
  alert(relevantSpan)
}) */

$("button").on("click", function(){
  console.log($(".container").find("p").text())
})
