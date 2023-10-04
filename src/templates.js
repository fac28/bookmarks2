function homePage() {
  return /*html*/ `
  <h1>Bookmarks</h1>
  <a href="/sign-up" class="Button">Sign up</a>
  <a href="/log-in" class="Button">Log in</a>
  `;
}

function signUpPage() {
  return /*html*/ `
<div class="Cover">
  <h1>"Register here"</h1>
  <form method="POST" action="/sign-up" class="Row">
    <div class="Stack" style="--gap: 0.25rem">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" required>
    </div>
    <div class="Stack" style="--gap: 0.25rem">
      <label for="password">Password</label>
      <input type="password" id="password" name="password" required>
    </div>
    <button class="Button">Sign up</button>
  </form>
</div>
`;
}

function addBookReview() {
  return /*html*/ `
<div>
  <h1>Add a review</h1>
  <form method="POST" action="/submit-book">
    <div>
      <label for="book-title">Book title</label>
      <input type="text" id="title" name="title" required>
    </div>
    <div>
      <label for="book-author">Book author</label>
      <input type="text" id="author" name="author" required>
    </div>
    <button class="Button">Submit book</button>
  </form>
</div>
`;
}

function displayYourBooks(books) {
  return /*html*/ `
  <div class="Cover">
      <h1>Add a book</h1>
      <form method="POST" class="Stack" style="--gap: 0.5rem">
        <div class="Stack" style="--gap: 0.25rem">
          <label for="title">Book Title</label>
          <input type="text" id="title" name="title" required>
        </div>
        <div class="Stack" style="--gap: 0.25rem">
          <label for="author">Author</label>
          <input type="text" id="author" name="author" required>
        </div>
        <div class="Stack" style="--gap: 0.25rem">
          <label for="review">Review</label>
          <input type="text" id="review" name="review" required>
        </div>
        <div class="Stack" style="--gap: 0.25rem">
          <label for="rating">Rating</label>
          <input type="number" id="rating" name="rating" min="1" max="5" required>
        </div>
        <button>Add Your Review</button>
      </form>
      <ul class="Center Stack">
        ${books
          .map(
            (entry) => `
            <li>
              <h2>${entry.title}</h2>
              <p>${entry.author}</p>
              <p>${entry.review}</p>
              <p>${entry.rating}</p>
            </li>
            `
          )
          .join("")}
      </ul>
    </div> 
  `;
}

module.exports = { homePage, signUpPage, addBookReview, displayYourBooks };
