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

module.exports = { signUpPage };
