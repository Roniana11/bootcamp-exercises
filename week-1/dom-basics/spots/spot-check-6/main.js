const list = document.getElementById("list").querySelector('ul');

const addItem = function () {
    const item = document.createElement('li');
    item.innerHTML="A new item!";
    list.appendChild(item);
}
