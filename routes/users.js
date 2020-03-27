const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const mySqlConnection = require("../db/db")

let user


router.get('/', (req, res) => {
  if (!req.session.user){
    res.status(401).render('home', {
      user: req.session.user,f:0,d:d
    });
    d=0;
  }
  else { 
    res.status(200).redirect('/users/welcome');  }
});

router.get("/welcome", (req, res) => {
  if (!req.session.user) {
    res.status(401).render("login")
  } else {

    mySqlConnection.query("SELECT full_name FROM users WHERE user_id = ?",
      [req.session.user.user_id],
      (err,name) => {
        if (err ) console.log(err);
        res.status(200).render("home",{
          name :name , f:1
        });
      });
    
  }
});



router.get("/signUp", (req, res) => {
  if (!req.session.user) {
    res.status(200).render("signUp")
  } else {
    res.status (403).redirect("/users/welcome?logout+first")
  }
});

router.post("/signUp", (req, res) => {
  const { name,day,month,year,gender,phone, email, usernm, pass1, pass2} = req.body
  let errors = []
  if (!name || !gender|| !email||!phone || !pass1 || !pass2 || !usernm) {
    errors.push({ msg: "Please enter all fields" })
  }
  var dob= day + "-"+ month + "-" + year;
var d;
if(day==0 || month==0 || year==0)
 {res.render("signUp",{d:1})}
else if(day>29 && month==2)
  {res.render("signUp",{d:2})}
	else if (day==31&&(month==6||month==11||month==4||month==9))
	{res.render("signUp",{d:2})}
	else if(day==29&&month==2&&(year%4!=0))
	{res.render("signUp",{d:2})}
	else if(day==29&&month==2&&(year%4==0&&year%100==0&&year%400!=0))
  {res.render("signUp",{d:2})}
  
  else if (pass1 != pass2) {
    {res.render("signUp",{d:3})}
  }
  else{
  mySqlConnection.query(
    "SELECT * FROM users WHERE email = ? OR phone= ?",
    [email,phone],
    (err, rows) => {
      if (err) {
        res.status = 500
        res.send(err)
      }
      if (rows.length) 
      {res.render("signUp",{d:4})}
      else if (errors.length > 0) {
        res.render('signUp', {errors, name, phone})
      }
       else {
        pwdHash = bcrypt.hashSync(pass1, 10)
        var sql = `INSERT INTO users (full_name,dob,sex,phone,email, user_name, pwdHash) VALUES ?`
        const values = [[name,dob,gender,phone, email, usernm, pwdHash]]

        mySqlConnection.query(sql, [values], err => {
          if (err) res.status(500).send(err)
          res.status(200).render("login",{d:5})
        })
        
      }
    },
  )}
}); 


var c=0;
router.get("/login", (req, res) => {
  if (!req.session.user) {
    res.status(200).render("login")
  } else {
    res.status(403).redirect("/users/welcome?Already+logged+in")
  }
});

router.post("/login", (req, res) => {
  const { email, password } = req.body
  mySqlConnection.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    (err, rows) => {
      if (err) res.status(500).send(err)
      user = rows[0]
      if (user) {
        const result = bcrypt.compareSync(password, user.pwdHash)
        if (result) {
          req.session.user = user;
          if(c===0) res.redirect("/users/welcome?login?successfull");
          else {  c=0;
          res.redirect("/users/register?login+successfull?Register+here");
            }
          // res.redirect("/home?login?successfull");
        } else {
          res.status(400).render('login', { l:1, email });
        }
      } else {
        res.status(400).render('login', { l:2 });
      }
    },
  )
});

router.get("/logout", (req, res, next) => {
  if (req.session.user) {
    req.session.destroy(() => {
      res.status(200).redirect('/home?logout+success');
      c=0;
    })
  } else {
    res.status(400).send("you are not logged in")
  }
});


router.get("/register", (req, res) => {
  if (!req.session.user) {
    res.status(401).render("login")
    c=1;
  } else {
    res.status(200).render("register")
  }
});


router.post("/register", (req, res) => {
  if (req.session.user) {
    const { event_id,clg_name,fname,phone } = req.body
    mySqlConnection.query(
      "SELECT * FROM contacts WHERE user_id = ? AND event_id = ?",
      [req.session.user.user_id,event_id],
      (err, rows) => {
        if (rows.length){ res.render("register",{r:1});
          // res.status(400).send("Already registered for this event");
        }
        else if (err) {res.status(500).send(err)}
        else {
          var sql = `INSERT INTO contacts (event_id,user_id,clg_name,fname,phone) VALUES ?`
                const values = [[event_id, req.session.user.user_id ,clg_name,fname,phone]]
                mySqlConnection.query(sql, [values], err => {
                  if (err) {
                    res.status = 500
                    res.send(err)
                  }
                })
                res.redirect("/users/events")
        }
      },
    )
  } 
  else {
      res.status(501).render('login', {error: "login first"})
  }
});

router.get("/update_password", (req, res) => {
  if (!req.session.user) {
    res.status(200).render("update_password")
  } else {
    res.status(403).redirect("/users/welcome?Already+logged+in")
  }
});

router.post("/update_password", (req, res) => {
  {
    if (!req.session.user) {
        const { email,user_name,new_pass,pass_chck} = req.body
        mySqlConnection.query(
          "SELECT * FROM users WHERE email = ? AND  user_name = ?",
          [email, user_name],
          (err, rows) => {
            if (!rows.length) {
              res.status(400).render("update_password",{u:1});
            }
            else {
              if(new_pass != pass_chck) res.render("update_password", {u:2})
              else{
              pwdHash = bcrypt.hashSync(new_pass, 10)
          mySqlConnection.query(
                          "UPDATE users SET pwdHash=? WHERE email = ? AND user_name = ?",
                          [pwdHash,email,user_name],
                          // "UPDATE users SET pwdHash = pwdHash WHERE email=email;",
                          err => {
                            if (err) res.status(500).send(err)
                            else {
                              c=0;
                            res.status(200).render("login",{l:3});
                            }
                          },
                        )}
                      }
                    },
                  )
                } 
                else {
                res.status = 401;
                res.render("login", {msg: "[err]login first"})
                }
  }});

  router.get("/events", (req, res) => {
    (err,events) => {
      if (err ) console.log(err);
     }
    if (req.session.user) {
      mySqlConnection.query("SELECT * FROM contacts WHERE user_id = ?",
      [req.session.user.user_id],
      (err,events) => {
        if (err ) console.log(err);
        res.status(200).render("events",{
          events :events , e:1
        });
      });
    }
    else {res.status(401).redirect("/users/login"); }
  });
  
  var d=0;
  router.get("/event_cancel/:id", (req, res) => {
    if (req.session.user) {
      const event_id = (req.params.id);
        mySqlConnection.query(
          "SELECT * FROM contacts WHERE user_id = ? AND event_id=?",
          [req.session.user.user_id,event_id],
          (err, rows) => {
            if (!rows.length) {
              res.status(400).redirect("/users/events")
            }
            else{ 
              mySqlConnection.query(
                "DELETE FROM contacts WHERE user_id = ? AND event_id=?",
                [req.session.user.user_id,event_id],
                (err) => {
                  if (err) res.status(500).send(err)
                  else {
                    res.status(200).redirect('/users/events');
                  }
                },
              )
            }
          },
        )
  } //end of if(req.session.user)
  else {res.status(401).redirect("/users/login");}
  });

  router.get("/delete", (req, res) => {
  if (req.session.user) {
    mySqlConnection.query(
      "SELECT * FROM contacts WHERE user_id = ?",
      [req.session.user.user_id],
      (err, rows) => {
        if (err) res.status(500).send(err)
        
        if(rows.length)
        {
          mySqlConnection.query(
            "DELETE FROM contacts WHERE user_id = ?",
            [req.session.user.user_id],
            (err) => {
              if (err) res.status(500).send(err)
              else {
                res.status = 200;
              }
            },
          )
        }
        mySqlConnection.query(
          "DELETE FROM users WHERE user_id = ?",
          [req.session.user.user_id],
          (err) => {
            if (err) res.status(500).send(err)
            else {
              req.session.destroy(() => {
                d=1;
                res.status(200).redirect('/users/?Account+deleted+Successfully');
              })
            }
          },
        )
      },
    )
  } else {
    res.status(400).render("login",{l:4})
    
  }
});

module.exports = router