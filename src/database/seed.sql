BEGIN;

INSERT INTO users VALUES
  (1, 'a@example.com', '$2a$12$A74tKw96m82AEZpJrIEQxecZGscKayJD/hD5/I6DuqKEJoQlAlNYO', '2017-12-25 00:00:00'),
  (2, 'b@example.com', '$2a$12$o2NP8ykiki.T11qRQOCnBeX68PhwXHprM/hxHkbAfqotWo2XT.vdW', '2017-12-25 00:00:00'),
  (3, 'c@example.com', '$2a$12$8HIQ9kqN0brBUfDigfSfB.9BlSsICw4LQ/tiw4U/zMW5QWtuTqMG6', '2017-12-25 00:00:00')
ON CONFLICT(id) DO NOTHING;

INSERT INTO books VALUES
(1, 3, 'The Bell Jar', 'Sylvia Plath', 'Very sad!', 5, '2017-12-25 00:00:00'),
(2, 3, 'Crime and Punishment', 'Fyodor Dostoevsky', 'Also sad', 5, '2017-12-25 00:00:00'),
(3, 2, 'Being and Nothingness', 'Jean-Paul Sartre', 'Kind of uplifting?', 4, '2017-12-25 00:00:00'),
(4, 1, 'Moby Dick', 'Herman Melville', 'So melancholic...', 5, '2017-12-25 00:00:00'),
(5, 2, 'Eat, Pray, Love', 'Elizabeth Gilbert', 'Not a fan', 1, '2017-12-25 00:00:00')

ON CONFLICT(id) DO NOTHING;

COMMIT;

