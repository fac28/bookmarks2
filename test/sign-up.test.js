const test = require("node:test");
const assert = require("node:assert");
const { reset, request, getSession, get_sid } = require("./helpers.js");
const { getUserByEmail } = require("../src/model/user.js");
const seedDataBase = require("../src/database/seed.js");

test("POST /sign-up creates new user", async () => {
  reset();
  seedDataBase();

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
    `/my-shelf/4`,
    `Expected sign up to redirect to "/my-shelf/1" but got location header: ${headers.location}`
  );

  assert.ok(
    headers["set-cookie"]?.startsWith("sid="),
    `Expected sign up to set cookie named 'sid', but set-cookie header was: ${headers["set-cookie"]}`
  );

  const sid = get_sid(headers);
  const session = getSession(sid);

  assert.ok(session, `Expected sign up to create a new session created in DB`);

  assert.equal(
    session.user_id,
    4,
    `
    Expected session to contain user_id 4, but got ${session.user_id}`
  );

  const user = getUserByEmail("test@test.com");
  assert.equal(user.id, 4);
  assert.ok(
    user.hash.startsWith("$2a$12$"),
    `Expected user's password to be hashed with BCrypt, but got: ${user.hash}`
  );
});
