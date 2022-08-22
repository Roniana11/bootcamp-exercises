const contentDiv = document.getElementById("content-container");

const cart = [];
const products = [
  { name: "butter", price: 50, img: "" },
  { name: "tomatos", price: 5, img: "" },
  { name: "beer", price: 60, img: "" },
  { name: "eggs", price: 23, img: "" },
  { name: "bread", price: 10, img: "" },
];

const renderAbout = (text) => {
  contentDiv.innerHTML = "";
  const header = document.createElement("h2");
  header.innerHTML = "ABOUT US";

  const text = document.createElement("p");
  text.innerHTML =
    "some content.some content.some content.some content.some content.some content.some content.some content.some content.some content.some content.some content.some content.some content.some content.some content.some content.some content.some content.";
  contentDiv.appendChild(header);
  contentDiv.appendChild(text);
};

const renderProducts = () => {
  contentDiv.innerHTML = "";
  const list = createList(products);
  contentDiv.appendChild(list);
};


const renderCart = () => {
  contentDiv.innerHTML = "";
  const list = createList(crat);
  contentDiv.appendChild(list);
};



const createList = (items) =>{
  const list = document.createElement('ul');

  items.forEach((item) => {
    const productEl = document.createElement("li");
    const image = document.createElement("img");
    const price = document.createElement("p");
    const name = document.createElement("h3");

    image.src = item.img;
    price.innerHTML = item.price;
    name.innerHTML = item.name;

    productEl.append(image,name,price);
    list.appendChild(productEl);
  });

  return list;
}