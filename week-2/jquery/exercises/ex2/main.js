$('button').click(function (){
  $('#list').append(`<li class="human">${$('input').val()}</li>`)
})

$('#list').on("click",".human",function(){
  $(this).remove();
})