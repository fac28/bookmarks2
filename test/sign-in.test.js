const test = require("node:test");
const assert = require("node:assert");
const { reset, request, getSession, get_sid } = require("./helpers.js");
const bcrypt = require("bcryptjs");
const { createUser } = require("../src/model/user.js");

test("POST /log-in creates a new session", async () => {
  reset();
  const hash = await bcrypt.hash("fac,test this", 12);
  createUser("user@test.com", hash);

  const { status, headers } = await request("/log-in", {
    method: "POST",
    body: "email=user@test.com&password=meshuggah",
    redirect: "manual",
    headers: { "content-type": "application/x-www-form-urlencoded" },
  });

  assert.equal(
    status,
    302,
    `Expected log in to redirect, got instead status: ${status}`
  );
  assert.equal(
    headers.location,
    "/my-shelf/1",
    `Expected log in to redirect to user's personal page but instead got: ${headers.location}`
  );
  assert.ok(
    headers["set-cookie"]?.startsWith("sid="),
    `Expected log in to set cookie named 'sid', but set-cookie header was: ${headers["set-cookie"]}`
  );

  const sid = get_sid(headers);
  const session = getSession(sid);
  assert.equal(
    session.user_id,
    1,
    `Expected session to contain user_id 1, but got ${session.user_id}`
  );
});
