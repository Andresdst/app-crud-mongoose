require("./styles/styles.css");
//webpack carga el css dentro del JS y es utilizado en el backend/index.html
import UI from "./UI.js"; //webpack ofrece metodo de importacion

document.addEventListener("DOMContentLoaded", () => {
  //al cargar el DOM ejecutar:
  const ui = new UI();

  ui.renderBooks().then((doc) => {
    console.log("renderizo");
  });
});

document.getElementById("book-form").addEventListener("submit", function (e) {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;
  const image = document.getElementById("image").files;
  console.log(title, author, isbn, image);

  const formData = new FormData();

  formData.append("image", image[0]);
  formData.append("title", title);
  formData.append("author", author);
  formData.append("isbn", isbn);

  const ui = new UI();
  ui.addNewBook(formData);
  e.preventDefault();
});
