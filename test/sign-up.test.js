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

  assert.equal(
    status,
    302,
    `Expected sign up to redirect, but got status: ${status}`
  );

  assert.equal(
    headers.location,
    `/my-shelf/1`,
    `Expected sign up to redirect to "/my-shelf/1" but got location header: ${headers.location}`
  );

  assert.ok(
    headers["set-cookie"]?.startsWith("sid="),
    `Expected sign up to set cookie named 'sid', but set-cookie header was: ${headers["set-cookie"]}`
  );

  const sid = get_sid(headers);

  const user = getUserByEmail("test@test.com");
  console.log(user);
  assert.equal(user.id, 1);
  assert.ok(
    user.hash.startsWith("$2a$12$"),
    `Expected user's password to be hashed with BCrypt, but got: ${user.hash}`
  );
});
