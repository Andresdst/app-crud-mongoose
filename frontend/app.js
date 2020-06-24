require("./styles/styles.css");
//webpack carga el css dentro del JS y es utilizado en el backend/index.html
import BookService from "./services/BookService"; //webpack ofrece metodo de importacion

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

  const bookservice = new BookService();
  bookservice.postBook(formData);
  e.preventDefault();
});
