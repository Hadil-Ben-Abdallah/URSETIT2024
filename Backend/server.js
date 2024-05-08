// import multer from 'multer'
// import path from 'path'


const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const path = require('path')


const app = express()
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '/Frontend/public/css'), 
// {
//   setHeaders: (res, path) => {
//     if (path.endsWith('.css')) {
//       res.setHeader('Content-Type', 'text/css');
//     }
//   },
// }
));


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ursetit_node'
})

app.post('/new-project', (req, res) => {
  const sql = "INSERT INTO new_projects (`annéeProj`, `codeProj`, `catégorieProj`, `typeProj`, `intituléProj`,  `coordinateurProj`, `budgetProj`) VALUES (?)";

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

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'public/images')
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.filename + "_" + Date.now() + path.extname(file.originalname));
//   }
// })

// const upload = multer({ storage: storage });


// app.post('/inscription', upload.single('photoInsc') ,(req, res) => {
//   const photoInsc = req.file.filename;
//   const sql = "INSERT INTO inscriptions (`photoInsc`) VALUES (?)";

//   db.query(sql, [photoInsc], (err, data) => {
//     if (err) return res.json(err);
//     return res.json(data);
// })
// })

app.post('/inscription', (req, res) => {
  const sql = "INSERT INTO inscriptions (`ministereInsc`, `universiteInsc`, `etablissementInsc`, `cinInsc`, `numPassInsc`,  `cnrpsInsc`, `nomInsc`, `prenomInsc`, `emailInsc`, `dateNaissanceInsc`, `genreInsc`, `photoInsc`, `fonctionInsc`, `gradeInsc`, `specialiteInsc`, `diplomeInsc`, `dateDiplomeInsc`, `indexInsc`, `identificationInsc`, `telFixeInsc`, `telMobileInsc`, `faxInsc`) VALUES (?)";
  const values = [
    req.body.ministereInsc,
    req.body.universiteInsc,
    req.body.etablissementInsc,
    req.body.cinInsc,
    req.body.numPassInsc,
    req.body.cnrpsInsc,
    req.body.nomInsc,
    req.body.prenomInsc,
    req.body.emailInsc,
    req.body.dateNaissanceInsc,
    req.body.genreInsc,
    req.body.photoInsc,
    req.body.fonctionInsc,
    req.body.gradeInsc,
    req.body.specialiteInsc,
    req.body.diplomeInsc,
    req.body.dateDiplomeInsc,
    req.body.indexInsc,
    req.body.identificationInsc,
    req.body.telFixeInsc,
    req.body.telMobileInsc,
    req.body.faxInsc,
  ]
  db.query(sql, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  })
})

app.post('/', (req, res) => {
  const { emailInsc, cinInsc } = req.body;
  const sql = 'SELECT * FROM inscriptions WHERE emailInsc = ? AND cinInsc = ?';
  db.query(sql, [emailInsc, cinInsc], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }
    console.log('Query results:', results);
    if (results.length === 0) {
      console.log('No matching user found');
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    console.log('Login successful');
    return res.status(200).json({ message: 'Login successful' });
  });
});

app.get("/inscriptions", (req, res) => {
  const sql = "SELECT * FROM inscriptions where cinInsc = 14405961";
  db.query(sql, (err, result) => {
    if (err) res.json({ message: "Server error"});
    return res.json({Data: result});
  })
})

app.get("/new_projects", (req, res) => {
  const sql = "SELECT * FROM new_projects ";
  db.query(sql, (err, result) => {
    if (err) res.json({ message: "Server error"});
    return res.json({Data: result});
  })
})

app.get("/get_user/:cinInsc", (req, res) => {
  const cinInsc = req.params.cinInsc;
  const sql = "SELECT * FROM inscriptions WHERE cinInsc = ?";
  db.query(sql, [cinInsc], (err, result) => {
    if (err) return res.json({ message: "Server error" });
    return res.json(result);
  });
});

app.delete('/delete/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'DELETE FROM new_projects WHERE id = ?';
  db.query(sql, id, (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Server error' });
      return;
    }
    res.json({ message: 'Project deleted successfully' });
  });
});

app.post("/edit_user/:cinInsc", (req, res) => {
  const cinInsc = req.params.cinInsc;
  const sql =
    "UPDATE inscriptions SET `ministereInsc`=?, `universiteInsc`=?, `etablissementInsc`=?, `cinInsc`=?, `numPassInsc`=?,  `cnrpsInsc`=?, `nomInsc`=?, `prenomInsc`=?, `emailInsc`=?, `dateNaissanceInsc`=?, `genreInsc`=?, `photoInsc`=?, `fonctionInsc`=?, `gradeInsc`=?, `specialiteInsc`=?, `diplomeInsc`=?, `dateDiplomeInsc`=?, `indexInsc`=?, `identificationInsc`=?, `telFixeInsc`=?, `telMobileInsc`=?, `faxInsc`=? WHERE cinInsc=14405961";
    const values = [
      req.body.ministereInsc,
      req.body.universiteInsc,
      req.body.etablissementInsc,
      req.body.cinInsc,
      req.body.numPassInsc,
      req.body.cnrpsInsc,
      req.body.nomInsc,
      req.body.prenomInsc,
      req.body.emailInsc,
      req.body.dateNaissanceInsc,
      req.body.genreInsc,
      req.body.photoInsc,
      req.body.fonctionInsc,
      req.body.gradeInsc,
      req.body.specialiteInsc,
      req.body.diplomeInsc,
      req.body.dateDiplomeInsc,
      req.body.indexInsc,
      req.body.identificationInsc,
      req.body.telFixeInsc,
      req.body.telMobileInsc,
      req.body.faxInsc,
    ]
  db.query(sql, values, (err, result) => {
    if (err)
      return res.json({ message: "Something unexpected has occured" + err });
    return res.json({ success: "Student updated successfully" });
  });
});



// app.post('/inscription', upload.single('photoInsc'), (req, res) => {
//   const photoInsc = req.file.filename;
//   const {
//     ministereInsc, universiteInsc, etablissementInsc, cinInsc, numPassInsc,
//     cnrpsInsc, nomInsc, prenomInsc, emailInsc, dateNaissanceInsc, genreInsc,
//     fonctionInsc, gradeInsc, specialiteInsc, diplomeInsc, dateDiplomeInsc,
//     indexInsc, identificationInsc, telFixeInsc, telMobileInsc, faxInsc
//   } = req.body;

//   const sql = `INSERT INTO inscriptions (
//     ministereInsc, universiteInsc, etablissementInsc, cinInsc, numPassInsc,
//     cnrpsInsc, nomInsc, prenomInsc, emailInsc, dateNaissanceInsc, genreInsc,
//     photoInsc, fonctionInsc, gradeInsc, specialiteInsc, diplomeInsc, dateDiplomeInsc,
//     indexInsc, identificationInsc, telFixeInsc, telMobileInsc, faxInsc
//   ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

//   const values = [
//     ministereInsc, universiteInsc, etablissementInsc, cinInsc, numPassInsc,
//     cnrpsInsc, nomInsc, prenomInsc, emailInsc, dateNaissanceInsc, genreInsc,
//     photoInsc, fonctionInsc, gradeInsc, specialiteInsc, diplomeInsc, dateDiplomeInsc,
//     indexInsc, identificationInsc, telFixeInsc, telMobileInsc, faxInsc
//   ];

//   db.query(sql, values, (err, data) => {
//     if (err) return res.json(err);
//     return res.json(data);
//   });
// });


app.listen(8081, ()=> {
  console.log("Listening...");
})