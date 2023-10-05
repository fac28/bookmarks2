const { ratingsConverter } = require("./utils/ratingsConverter");

function layout(title, content, style) {
  return /*html*/ `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
      <link rel="stylesheet" href="${style}">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;500;900&display=swap" rel="stylesheet">
  </head>
    <body>
      ${content}
    </body>
  </html>
  `;
}

function homePage() {
  const title = "Home page";
  const style = "style.css";
  const content = /*html*/ `
  
  <div class="hero">
    <div class="container">
      <div class="container1">
        <h1 class="title">Bookmarks</h1>
        <h2 class="sub-title">The top secret bookshelf, shhhh</h2>
      </div>
      <div class="container2">
        <a href="/sign-up" class="button">Sign up</a>
        <a href="/log-in" class="button">Log in</a>
      </div>
    </div>
  </div>
  `;
  return layout(title, content, style);
}

function signUpPage() {
  const title = "Sign up page";
  const style = "../signup.css";
  const content = /*html*/ `
  <div class="signup-wrapper">
    <div class="signup-container">
        <h1 class="signup-heading">Register here</h1>
        <form method="POST" action="/sign-up" class="signup-form">
            <div class="form-group">
                <label for="email" class="form-label">Email</label>
                <input type="email" id="email" name="email" class="form-input" required>
            </div>
            <div class="form-group">
                <label for="password" class="form-label">Password</label>
                <input type="password" id="password" name="password" class="form-input" required>
            </div>
            <button type="submit" class="signup-button">Sign up</button>
        </form>
    </div>
</div>
`;
  return layout(title, content, style);
}

function logIn() {
  const title = "Log in page";
  const style = "../login.css";
  const content = /*html*/ `
  <div class="login-wrapper">
        <div class="login-container">
            <h1 class="login-heading">Log in</h1>
            <form method="POST" action="/log-in" class="login-form">
                <div class="form-group">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" id="email" name="email" class="form-input" required>
                </div>
                <div class="form-group">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" id="password" name="password" class="form-input" required>
                </div>
                <button type="submit" class="login-button">Log in</button>
            </form>
        </div>
    </div>
  `;
  return layout(title, content, style);
}

function addBookReview() {
  const title = "Adding a book review";
  const content = /*html*/ `
  <div class="review-form">
  <h1>Add a review</h1>
  <form method="POST" action="/submit-book">
    <div class="form-group">
      <label for="title">Book title</label>
      <input type="text" id="title" name="title" required>
    </div>
    <div class="form-group">
      <label for="author">Book author</label>
      <input type="text" id="author" name="author" required>
    </div>
    <button class="submit-button">Submit book</button>
  </form>
</div>
`;
  return layout(title, content);
}


function displayYourBooks(books) {
  const title = "Your shelf";
  const style = "../bpstyle.css";
  const content = /*html*/ `
  <div class="bookpageCover">
      <h1>Welcome to your shelf.</h1>
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
          <label for="rating">Rating: </label>
    <input name="rating" type="range" min="0" max="5" step="1" required>
        </div>
        <button>Add book</button>
      </form>
      <ul class="Center Stack">
        ${books
          .map(
            (entry) => `
            <li>
              <span class="Title">Title: ${entry.title}</span>
              <span class="Author">Author: ${entry.author}</span>
              <p>Review: ${entry.review}</p>
              <p>Rating: ${ratingsConverter(entry.rating)}</p>
            </li>
            <form action="/delete" method="POST">
            <input type="hidden" name="book_id" value="${entry.id}">
            <button class="form__button-icon delete" type="submit">Delete</button>
          </form>

            `
          )
          .join("")}
      </ul>
      <a href="/log-out" class="logOutButton">Log out</a>
    </div> 
  `;
  return layout(title, content, style);
}

module.exports = {
  homePage,
  signUpPage,
  displayYourBooks,
  logIn,
};
