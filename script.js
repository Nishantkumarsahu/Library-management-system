function searchBooks() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const books = document.querySelectorAll('.book');

    books.forEach(book => {
        const title = book.querySelector('h3').textContent.toLowerCase();
        const author = book.querySelector('p').textContent.toLowerCase();
        if (title.includes(query) || author.includes(query)) {
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    });
}
