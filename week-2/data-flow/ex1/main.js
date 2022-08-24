let posts = [
  { name: "Orange", text: "orange" },
  { name: "Banana", text: "yellow" },
  { name: "Coconut", text: "brown" },
  { name: "Kiwi", text: "brown" },
];

const render = function () {
  $("#posts").html("");
  for (const post of posts) {
    $("#posts").append(`<div class="post"><b>${post.name}</b>: ${post.text}</div>`);
  }
};

const onSubmitHandler = function () {
  const name = $("#name").val();
  const text = $("#text").val();
  posts.push({ name, text });
  render();
  $("input").val("");
};

const onRemoveHandler = function (el) {
  const elText = el.text().split(':'); 
  const filteredPosts =posts.filter( post => post.name !== elText[0] && post.text !== elText[1]);
  posts = [...filteredPosts];
  render();

};


$("#submit-btn").click(onSubmitHandler);
$("body").on("click",".post", function() { onRemoveHandler($(this))});
render();
