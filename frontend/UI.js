import BookService from "./services/BookService"; //webpack ofrece metodo de importacion
import { format } from "timeago.js";
const bookService = new BookService();

class UI {
  async addNewBook(book) {
    await bookservice.postBook(book);
    this.clearForm();
  }
  async renderBooks() {
    const books = await bookService.getBooks();
    const booksCardContainer = document.getElementById("books-cards");
    booksCardContainer.innerHTML = "";
    books.forEach((book) => {
      const div = document.createElement("div");
      //div.className = 'animated fadeInRight';
      div.innerHTML = `
      <div class="card m-2">
        <div class="row no-gutters">
            <div class="col-md-4">
                <img src="http://localhost:3000${
                  book.imagePath
                }" class="img-fluid" alt="">
            </div>
            <div class="col-md-8">
                <div class="card-block px-2">
                    <h4 class="card-title">${book.title}</h4>
                    <p class="card-text">${book.author}</p>
                    <a href="#" class="btn btn-danger delete" _id="${
                      book._id
                    }">X</a>
                </div>
            </div>
        </div>
        <div class="card-footer w-100 text-muted">
          ${format(book.created_at)}
        </div>
      </div>
      `;
      booksCardContainer.appendChild(div);
    });
  }
  renderMessage() {}
  clearForm() {
    document.getElementById("book-form").reset();
  }
  deleteBook() {}
}

export default UI;
