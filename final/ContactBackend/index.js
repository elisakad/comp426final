const express = require('express');
const app = express();

const cors = require('cors');
const cors_options = {
    origin: "http://localhost:3000",
}
app.use(cors());

//special method called use to install middleware: basically means that you can install code that is often part of some available module that will process requests and pass it on to the enxt middleware
const bodyParser = require('body-parser'); //body parser = express module that parses the body of requests that come in as varios things. Required body parts come in as a separate parcel and is intended to be used with the use method/
app.use(bodyParser.json()); //request will go through a series of middleware modules
//also body parser parses json object requested from front end


const Contact = require('./contact.js');
//wrote contact as node module to utilize require require facility; have to start with ./ so it knows not to look in node modules directory

app.get('/contacts', (req, res) => {

   // res.json(Contact.findAll());
   let answer = Contact.findAll();
    if (req.query.jsonp) {
        //take whatever was given as json p parameter, reflect that parameter with answer
        res.send(req.query.jsonp + "(" + JSON.stringify(answer) + ");");
    } else {
        //otherwise just send back a json respond
        res.json(Contact.findAll());
    }
});

app.get('/contacts/:id', (req, res) => {
    let contact = Contact.find(req.params.id);
    console.log("sending back", contact)
    if (contact === undefined) {
        res.status(404).send("No such contact with id = " + req.params.id); //status code generates a response that is not ok, allows you to input a message body
    } else {
        res.json(contact);
    }
});


//post to /contacts-- this is where to expect info to come in as part of the message body of that post request
//need to interpret that message body in to utilize that info
app.post('/contacts', (req, res) => {
    let {first, last, email, phone, notes, url} = req.body;
    let contact = Contact.create(first, last, email, phone, notes, url);
    if (contact === undefined) {
        res.status(500).send("Server error, contact not created");
    } else {
        res.json(contact);
    }
});

app.post('/contacts/:id', (req, res) => {
    let contact = Contact.find(req.params.id); //first find contact, if not then return a status error
    if (contact === undefined) {
        res.status(404).send("No such contact with id = " + req.params.id);
    } else {
        let {first, last, email, phone, notes, url} = req.body;
        contact.first = first;
        contact.last = last;
        contact.email = email;
        contact.phone = phone;
        contact.notes = notes;
        contact.url = url;  

        res.json(contact);
    }
});

app.delete('/contacts/:id', (req, res) => {
    Contact.delete(req.params.id);
    res.json(true);
});

const port = process.env.PORT || 3010;

app.listen(port, () => {
    console.log('Example app listening on port: ' + port);
})