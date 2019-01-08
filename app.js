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
app.use(express.static(__dirname + '/public'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use(bodyParser.urlencoded({extended:true}));

// RESTful Routes

app.get('/', (req,res) => {
	res.redirect('/blogs');
});

app.get('/blogs', (req,res) => {
	Blog.find({}, (err,blogs) => {
		err ? console.log(err) : res.render('index',{blogs:blogs});
	});
});

app.get('*', (req,res) => {
	res.render('invalid');
})

app.listen(port, () => {
	console.log('Server started');
});
