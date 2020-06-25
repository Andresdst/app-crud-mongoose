class BookService {
  constructor() {
    this.URI = "http://localhost:3000/api/books";
  }

  async getBooks() {
    const response = await fetch(this.URI);
    const books = await response.json();
    return books;
  }

  async postBook(book) {
    //al pasar imagen no se colocar content-type
    const res = await fetch(this.URI, {
      method: "POST",
      body: book,
    });

    const data = await res.json();
    console.log(data);
  }

  async deleteBook(id) {
    const res = await fetch(`${this.URI}/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
      body: id,
    });

    const data = await res.json();
    console.log(data);
  }
}

export default BookService;
