/* $('button').on('click', function() {
  let relevantSpan = $(this).closest("div").find("span").text()
  alert(relevantSpan)
}) */

$(".generator").on("click", function(){
  const processorId = $(this).closest(".processor").attr('id');
  const copmputerId = $(this).closest(".computer").data().id;
  const busNum = $(this).closest(".computer").find('.BUS').text();
  console.log(processorId,copmputerId,busNum)
})


$(".validator").on("click", function(){
  const computerText = $(this).closest(".computer").text();
  const mb = $(this).closest(".computer").find('.MB').text();
  const QRS = $(this).closest(".computer").find('.QR');
  
  console.log(computerText,mb,QRS[0].innerHTML,QRS[1].innerHTML)
})