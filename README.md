# Bookmarks2

An app that lets the user easily add their favorite books to their personal bookshelf.

Check it out on this link!<br>
https://bookmarksfac28.fly.dev/ 


### Installation

1. Clone the repository to your local machine:

```shell
git clone https://github.com/fac28/bookmarks2.git
```

2. Navigate to the project directory:

```shell
cd bookmarks2
```

3. Install project dependencies using npm:

```shell
npm install
```

4. Rebuild better-sqlite3:

```shell
npm rebuild better-sqlite3
```

### Running Locally

To run the project locally, follow these steps:

1. Start the Node.js server:

```shell
npm start
```

2. Open your web browser and visit http://localhost:3000 to access Bookmarks2 locally.

### For developers

To run the project locally, follow these steps:

1. Start the Node.js server:

```shell
npm run seed
```

2.

```shell
npm run dev
```

### Team

Issy: UX/UI <br>
Elena: Scrum <br>
George: DevOps <br>
Tommaso: QA  

### Schema

<div align="center">
  <img src="https://github.com/fac28/bookmarks/assets/59057287/4c83fbb1-8a05-4adb-a2a9-29bb88c71ffa" width="600"/>
</div>

<details>
<summary><code>users</code></summary>

| column     | type     | constraints               |
| ---------- | -------- | ------------------------- |
| id         | integer  | primary key autoincrement |
| email      | text     | unique                    |
| hash       | text     |                           |
| created_at | datetime | DEFAULT CURRENT_TIMESTAMP |

</details>

<details>
<summary><code>sessions</code></summary>

| column     | type     | constraints               |
| ---------- | -------- | ------------------------- |
| id         | integer  | primary key               |
| user_id    | text     | foreign key               |
| expires_at | datetime | NOT NULL                  |
| created_at | datetime | DEFAULT CURRENT_TIMESTAMP |

</details>

<details>
<summary><code>books</code></summary>

| column     | type     | constraints               |
| ---------- | -------- | ------------------------- |
| id         | integer  | primary key autoincrement |
| user_id    | text     | foreign key               |
| title      | text     |                           |
| author     | text     |                           |
| review     | text     |                           |
| rating     | text     |                           |
| created_at | datetime | DEFAULT CURRENT_TIMESTAMP |

</details>

### Security 


<strong>Session Management:</strong>
  <p>
Will you store session info in a cookie (stateless) or in your database (stateful)?<br>
The session information is stored in a stateful manner in the database. The code uses sessions stored in the database to manage user authentication.
  </p>
<strong>Authentication:</strong>
<p>
How will you check a user’s identity (authentication)?<br>
User identity is authenticated by comparing the provided password with the hashed password stored in the database. This is done using the bcrypt.compare method in the login route.
</p>
<strong>Authorization:</strong>
<p>
How will you control what actions a user can take (authorization)?<br>
The code includes authorization logic in routes like /my-shelf/:user_id. It checks if the user trying to access a particular user's bookshelf is the owner of that bookshelf. If not, it returns a 401 Unauthorized status, indicating that the user is not allowed to access that resource.
</p>
<strong>CSRF Mitigation:</strong>
<p>
How will you mitigate Cross-site Request Forgery (CSRF) attacks?<br>
The code does not explicitly implement CSRF mitigation measures. CSRF protection typically involves generating and validating tokens on form submissions to ensure that requests originate from trusted sources. CSRF tokens are not present in the provided code.
</p>


### Credits

The project was created by <a href="https://github.com/cazanelena">Elena Cazan</a>, <a href="https://github.com/GeorgeKlemperer">George Klemperer</a>, <a href="https://github.com/isobelbutler">Isobel Butler</a> & <a href="https://github.com/benante">Tommaso Orlandi.</a>


