$('.item').on("click",function(){
  if($(this).data().instock){
    $(cart).append(`<div>${$(this).text()}</div>`)
  }else{
    $(this).disabled = true;
  }
})

