const mongoose = require('mongoose'),
bodyParser = require('body-parser'),
express = require('express'),
ejs = require('ejs'),
app = express(),
port = 3000;

mongoose.connect('mongodb://localhost:27017/restful_blog_app',{useNewUrlParser:true});

// Mongoose/Model config
let blogSchema = new mongoose.Schema({
	title: String,
	image: String,
	body: String,
	created: {type: Date, default: Date.now}
});

let Blog = mongoose.model('Blog',blogSchema);

// App Config
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

// RESTful Routes

app.listen(port,() => console.log('Server started'));

