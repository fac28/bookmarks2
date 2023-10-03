const test = require("node:test");
const assert = require("node:assert");
const { reset, request } = require("./helpers.js");
const { getUserByEmail } = require("../src/model/user.js");

test("POST /sign-up creates new user", async () => {
  reset();

  const { status, headers } = await request("/sign-up", {
    method: "POST",
    body: "email=test@test.com&password=123",
    redirect: "manual",
    headers: { "content-type": "application/x-www-form-urlencoded" },
  });

  const user = getUserByEmail("test@test.com");
  console.log(user);
  assert.equal(user.id, 1);
  assert.ok(
    user.hash.startsWith("$2a$12$"),
    `Expected user's password to be hashed with BCrypt, but got: ${user.hash}`
  );
});
