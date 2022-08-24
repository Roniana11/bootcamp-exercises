$('body').append(
  '<div class="box" id="b1"></div>'
  ,'<div class="box" id="b2"></div>'
)

$(".box").css("border-radius","3px");
$(".box").css("box-shadow","5px 5px 5px grey");
$("body").on("mouseenter",".box",function(){
  $(this).css('background-color',"pink");
});

$("body").on("mouseout",".box",function(){
  $(this).css('background-color',"#8e44ad");
});