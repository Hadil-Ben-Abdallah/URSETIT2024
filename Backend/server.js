const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ursetit'
})

app.post('/new-project', (req, res) => {
  const sql = "INSERT INTO newproject (`annéeProj`, `codeProj`, `catégorieProj`, `typeProj`, `intituléProj`,  `coordinateurProj`, `budgetProj`) VALUES (?)";

  const values = [
    req.body.annéeProj,
    req.body.codeProj,
    req.body.catégorieProj,
    req.body.typeProj,
    req.body.intituléProj,
    req.body.coordinateurProj,
    req.body.budgetProj,
  ]
  db.query(sql, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  })
})

app.listen(8081, ()=> {
  console.log("Listening...");
})
