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



// app.post('/inscription', (req, res) => {
//   const sql = "INSERT INTO inscriptions (`ministereInsc`, `universiteInsc`, `etablissementInsc`, `cinInsc`, `numPassInsc`,  `cnrpsInsc`, `nomInsc`, `prenomInsc`, `emailInsc`, `dateNaissanceInsc`, `genreInsc`, `photoInsc`, `fonctionInsc`, `gradeInsc`, `specialiteInsc`, `diplomeInsc`, `dateDiplomeInsc`, `indexInsc`, `identificationInsc`, `telFixeInsc`, `telMobileInsc`, `faxInsc`) VALUES (?)";
//   const values = [
//     req.body.ministereInsc,
//     req.body.universiteInsc,
//     req.body.etablissementInsc,
//     req.body.cinInsc,
//     req.body.numPassInsc,
//     req.body.cnrpsInsc,
//     req.body.nomInsc,
//     req.body.prenomInsc,
//     req.body.emailInsc,
//     req.body.dateNaissanceInsc,
//     req.body.genreInsc,
//     req.body.photoInsc,
//     req.body.fonctionInsc,
//     req.body.gradeInsc,
//     req.body.specialiteInsc,
//     req.body.diplomeInsc,
//     req.body.dateDiplomeInsc,
//     req.body.indexInsc,
//     req.body.identificationInsc,
//     req.body.telFixeInsc,
//     req.body.telMobileInsc,
//     req.body.faxInsc,
//   ]
//   db.query(sql, [values], (err, data) => {
//     if (err) return res.json(err);
//     return res.json(data);
//   })
// })









app.post('/inscription', (req, res) => {
  const { emailInsc, cinInsc } = req.body;

  // Query to check if email or CIN already exists
  const checkDuplicateSql = "SELECT emailInsc, cinInsc FROM inscriptions WHERE emailInsc = ? OR cinInsc = ?";

  db.query(checkDuplicateSql, [emailInsc, cinInsc], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    if (results.length > 0) {
      const duplicateFields = {};
      results.forEach(result => {
        if (result.emailInsc === emailInsc) {
          duplicateFields.emailInsc = 'L\'email existe déjà';
        }
        if (result.cinInsc === cinInsc) {
          duplicateFields.cinInsc = 'Le CIN existe déjà';
        }
      });
      return res.status(409).json({ errors: duplicateFields });
    }

    // If no duplicates, proceed to insert the new record
    const insertSql = "INSERT INTO inscriptions (`ministereInsc`, `universiteInsc`, `etablissementInsc`, `cinInsc`, `numPassInsc`,  `cnrpsInsc`, `nomInsc`, `prenomInsc`, `emailInsc`, `dateNaissanceInsc`, `genreInsc`, `photoInsc`, `fonctionInsc`, `gradeInsc`, `specialiteInsc`, `diplomeInsc`, `dateDiplomeInsc`, `indexInsc`, `identificationInsc`, `telFixeInsc`, `telMobileInsc`, `faxInsc`) VALUES (?)";
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
    ];
    
    db.query(insertSql, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(201).json(data);
    });
  });
});



app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM inscriptions WHERE emailInsc = ? AND cinInsc = ?";
  db.query(sql, [email, password], (err, results) => {
    if (err) return res.json({ success: false, message: err.message });
    if (results.length > 0) {
      return res.json({ success: true });
    } else {
      return res.json({ success: false, message: 'Invalid email or password' });
    }
  });
});
// app.post('/', (req, res) => {
//   const { emailInsc, cinInsc } = req.body;
//   const sql = 'SELECT * FROM inscriptions WHERE emailInsc = ? AND cinInsc = ?';
//   db.query(sql, [emailInsc, cinInsc], (err, results) => {
//     if (err) {
//       console.error('Error executing query:', err);
//       return res.status(500).json({ message: 'Internal server error' });
//     }
//     console.log('Query results:', results);
//     if (results.length === 0) {
//       console.log('No matching user found');
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }
//     console.log('Login successful');
//     return res.status(200).json({ message: 'Login successful' });
//   });
// });

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



app.put('/update/:id', (req, res) => {
  const columns = [];
  const values = [];

  if (req.body.annéeProj) {
    columns.push("`annéeProj`=?");
    values.push(req.body.annéeProj);
  }
  if (req.body.codeProj) {
    columns.push("`codeProj`=?");
    values.push(req.body.codeProj);
  }
  if (req.body.catégorieProj) {
    columns.push("`catégorieProj`=?");
    values.push(req.body.catégorieProj);
  }
  if (req.body.typeProj) {
    columns.push("`typeProj`=?");
    values.push(req.body.typeProj);
  }
  if (req.body.intituléProj) {
    columns.push("`intituléProj`=?");
    values.push(req.body.intituléProj);
  }
  if (req.body.coordinateurProj) {
    columns.push("`coordinateurProj`=?");
    values.push(req.body.coordinateurProj);
  }
  if (req.body.budgetProj) {
    columns.push("`budgetProj`=?");
    values.push(req.body.budgetProj);
  }

  // Add similar checks for other columns...

  const sql = `UPDATE new_projects SET ${columns.join(', ')} WHERE id=?`;
  const id = req.params.id;
  db.query(sql, [...values, id], (err, result) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(result);
  });
});



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


app.put('/update/:cinInsc', (req, res) => {
  const cinInsc = req.params.cinInsc;
  const updatedData = req.body;

  console.log('Updating user with CIN:', cinInsc);
  console.log('New data:', updatedData);

  const updateSql = "UPDATE inscriptions SET ? WHERE cinInsc = ?";
  console.log('SQL query:', updateSql);

  db.query(updateSql, [updatedData, cinInsc], (err, result) => {
    if (err) {
      console.error('Error updating user:', err);
      return res.status(500).json({ error: 'Database error' });
    }

    // Check if any rows were affected by the update
    if (result.affectedRows === 0) {
      console.log('User not found');
      return res.status(404).json({ error: 'User not found' });
    }

    // Return a success message or the updated user data
    console.log('User updated successfully');
    return res.status(200).json({ message: 'Successfully updated', updatedData });
  });
});










// app.post("/edit_user/:cinInsc", (req, res) => {
//   const cinInsc = req.params.cinInsc;
//   const sql =
//     "UPDATE inscriptions SET `ministereInsc`=?, `universiteInsc`=?, `etablissementInsc`=?, `cinInsc`=?, `numPassInsc`=?,  `cnrpsInsc`=?, `nomInsc`=?, `prenomInsc`=?, `emailInsc`=?, `dateNaissanceInsc`=?, `genreInsc`=?, `photoInsc`=?, `fonctionInsc`=?, `gradeInsc`=?, `specialiteInsc`=?, `diplomeInsc`=?, `dateDiplomeInsc`=?, `indexInsc`=?, `identificationInsc`=?, `telFixeInsc`=?, `telMobileInsc`=?, `faxInsc`=? WHERE cinInsc=14405961";
//     const values = [
//       req.body.ministereInsc,
//       req.body.universiteInsc,
//       req.body.etablissementInsc,
//       req.body.cinInsc,
//       req.body.numPassInsc,
//       req.body.cnrpsInsc,
//       req.body.nomInsc,
//       req.body.prenomInsc,
//       req.body.emailInsc,
//       req.body.dateNaissanceInsc,
//       req.body.genreInsc,
//       req.body.photoInsc,
//       req.body.fonctionInsc,
//       req.body.gradeInsc,
//       req.body.specialiteInsc,
//       req.body.diplomeInsc,
//       req.body.dateDiplomeInsc,
//       req.body.indexInsc,
//       req.body.identificationInsc,
//       req.body.telFixeInsc,
//       req.body.telMobileInsc,
//       req.body.faxInsc,
//     ]
//   db.query(sql, values, (err, result) => {
//     if (err)
//       return res.json({ message: "Something unexpected has occured" + err });
//     return res.json({ success: "Student updated successfully" });
//   });
// });



app.listen(8081, ()=> {
  console.log("Listening...");
})