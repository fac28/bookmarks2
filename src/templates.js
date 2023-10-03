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

function displayYourBooks() {
  return /*html*/ `
  <h1></h1>
  `;
}

module.exports = { signUpPage, addBookReview, displayYourBooks };
