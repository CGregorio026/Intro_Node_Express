// imports the packages into the document, requiring their respective module.
const express = require('express');
const path = require('path'); 
const fetch = require('node-fetch');

// app runs the express module, allowing it to be used elsewhere in the document without the need to write the function more than once, defining it to a quick variable.
var app = express();
// this defines our port; this is where on the localhost that our content will be found.
const port = 8002;

// info is some basic data that we can use to be called in the pug files. we can pass it through an app.get...res.render to render it in the specific files that we want to call our data through.
var info = {
    "basics": {
      "name": "Christian Gregorio",
      "label": "Programmer",
      "picture": "https://media.licdn.com/dms/image/C5603AQFkrRtTgr7bEA/profile-displayphoto-shrink_200_200/0?e=1576108800&v=beta&t=7LbkBfU88lJYg0fEEzORQwUzkJtsCD93Jwi6KtxMHMo",
      "email": "cgregorio026@west-mec.org",
      "phone": "(602) 509-1898",
      "summary": "I like to code. I like to draw. I like to paint. Need I say more? Arizona born, I grew up speaking two languages at home.",
      "location": {
        "address": "4417 Fauntleroy Way SW",
        "postalCode": "WA 98126",
        "city": "Glendale",
        "countryCode": "US",
        "region": "Washington"
      },
      "profiles": [{
        "network": "Twitter",
        "username": "joe",
        "url": "http://twitter.com/joemama"
      }]
    },
    "work": [{
      "company": "Company",
      "position": "President",
      "website": "http://company.com",
      "startDate": "2013-01-01",
      "endDate": "2014-01-01",
      "summary": "Description...",
      "highlights": [
        "Started the company"
      ]
    }],
    "volunteer": [{
      "organization": "Organization",
      "position": "Volunteer",
      "website": "http://organization.com/",
      "startDate": "2012-01-01",
      "endDate": "2013-01-01",
      "summary": "Description...",
      "highlights": [
        "Awarded 'Volunteer of the Month'"
      ]
    }],
    "education": [{
      "institution": "University",
      "area": "Software Development",
      "studyType": "Bachelor",
      "startDate": "2011-01-01",
      "endDate": "2013-01-01",
      "gpa": "4.0",
      "courses": [
        "DB1101 - Basic SQL"
      ]
    }],
    "awards": [{
      "title": "Award",
      "date": "2014-11-01",
      "awarder": "Company",
      "summary": "There is no spoon."
    }],
    "skills": [{
      "name": "Web Development",
      "level": "Master",
      "keywords": [
        "HTML",
        "CSS",
        "Javascript"
      ]
    }],
    "languages": [{
      "language1": "English",
      "fluency1": "Native speaker",
      "language2": "Spanish",
      "fluency2": "Native speaker",
    }],
    "interests": [{
      "name": "Hobbies",
      "keywords": [
        "Drawing",
        "Coding",
        "Math",
        "Swimming",
        "Hiking",
        "Cooking"
      ]
    }],
    "references": [{
      "name": "Jane Doe",
      "reference": "Reference..."
    }]
  };

  // this reads the routes file for the api file.
module.exports = (app) => {
  fs.readdirSync('routes/api/').forEach((file) => {
    require(`./api/${file.substr(0, file.indexOf('.'))}`)(app);
  })
}



// uses express to set pug as the view engine, or the template engine.
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// here, this causes everything under the public directory to be displayed as static content. This meaning; we will be able to run the code as content that will never change, and we won't get a 404 error if it asks for dynamic content and we aren't passing any through it.
app.use("/static", express.static(path.join(__dirname, "public")));

// using this, we pass information to the pug file. because in that document we have defined the title and the message, we can use those to define those as the content which should go inside of the document. Here, we use render to have the information passed to the pug file rendered to the user as html. 
app.get('/', (req, res) => {
    res.render('index', 
    { 
      data: info
    });
  });

app.get('/contact', (req, res) => {
    res.render('contact', 
    { 
      data: info
    });
  });

app.get('/github', (req, res) => {  
//because fetch has been defined above as node-fetch, we can just say fetch, instead of node-fetch.
var stuff = fetch('https://api.github.com/users/cgregorio026')
.then(res => res.json())
.then(
  (json) => {
    console.log(json)
  res.render('github', { 
      data: info,
      github: stuff
    })
  })
});
  
app.get('/experience', (req, res) => {
      res.render('experience', 
      { 
        data: info
      });
    });

app.get('/interests', (req, res) => {
      res.render('interests', 
      { 
        data: info
      });
    });
// when running nodemon, this will tell us that the info will be displayed on the port defined. to run this using nodemon, we would want to be in the projects directory, and use nodemon express.js, which will display this message, and then display the rest of our information in the pug file.
const server = app.listen(port, () => {
    console.log(`something is here -> ${server.address().port}`);
});