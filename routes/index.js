const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");

router.get('/', (req, res) => {
  res.status(200).render("intro");
});

router.get('/home', (req, res) => {
  if (!req.session.user){
    res.status(200).render('home', {
      user: req.session.user,f:0
    });}
  else
    res.status(200).redirect('/users/welcome');
});

router.get('/events', (req, res) => {
  if (!req.session.user){
    res.status(200).render('events', {
      user: req.session.user,e:0
    });}
  else
    res.status(200).redirect('/users/events');
});

router.get('/about',(req,res) => {
  res.status(200).render("about");
});
router.get('/sponsors',(req,res) => {
  res.status(200).render("sponsors");
});
router.get('/contact_us',(req,res) => {
  res.status(200).render("contact");
});

router.get("/event/technovation",(req,res) => {
  if (!req.session.user){res.status(200).render("technovation",{t:0});}
  else {res.status(200).render("technovation",{t:1}); }
});
router.get("/event/robowars",(req,res) => {
  if (!req.session.user){res.status(200).render("robowars",{t:0}); }
  else {res.status(200).render("robowars",{t:1}); }
});
router.get("/event/gamiacs",(req,res) => {
  if (!req.session.user){res.status(200).render("gamiacs",{t:0});}
  else {res.status(200).render("gamiacs",{t:1});  }
});
router.get("/event/software_corner",(req,res) => {
  if (!req.session.user){res.status(200).render("software_corner",{t:0}); }
  else {res.status(200).render("software_corner",{t:1});}
});
router.get("/event/entrepreneurial_event",(req,res) => {
  if (!req.session.user){res.status(200).render("entrepreneurial",{t:0});  }
  else {res.status(200).render("entrepreneurial",{t:1});  }
});

router.get('/404_page_not_found',(req,res) => {
  res.status(404).render("404_page_not_found");
});


module.exports = router;
