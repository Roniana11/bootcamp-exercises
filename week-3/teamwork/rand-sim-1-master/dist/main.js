const priorityCss = ["LOW", "MED", "HIGH"];

const renderer = new Render();

const add = function () {
  $.post("/todo", { text: $("#todo-input").val() }, function (todos) {
    renderer.render(todos);
    $("#todo-input").val("");
  });
};

$("#todos").on("click", ".fa-check-circle", function () {
  const id = $(this).closest(".todo").data().id;
  $.ajax({
    method: "PUT",
    url: "/todo/" + id,
    success: (todos) => renderer.render(todos),
  });
});

$("#todos").on("click", ".todo", function () {
  const prevPriority = $(this).data("priority");
  const priority = (prevPriority + 1 || 0) % 3;
  $(this).data("priority", priority);
  $(this).removeClass(priorityCss[prevPriority]);
  $(this).addClass(priorityCss[priority]);
});

$("#todos").on("click", ".fa-trash", function () {
  const id = $(this).closest(".todo").data().id;
  $.ajax({
    method: "DELETE",
    url: "/todo/" + id,
    success: (todos) => renderer.render(todos),
  });
});

$.get("/todos", (todos) => renderer.render(todos));
