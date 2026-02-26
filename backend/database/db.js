const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./students.db", (err) => {
  if (err) console.log(err);
  else console.log("SQLite Connected");
});

/* ================= STUDENTS TABLE ================= */
db.run(`
CREATE TABLE IF NOT EXISTS students (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  firstName TEXT,
  lastName TEXT,
  email TEXT UNIQUE,
  mobile TEXT,
  sucNo TEXT UNIQUE,
  password TEXT,
  role TEXT DEFAULT 'student'
)
`);

/* ================= EVENTS TABLE ================= */
db.run(`
CREATE TABLE IF NOT EXISTS events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  eventName TEXT
)
`);

module.exports = db;