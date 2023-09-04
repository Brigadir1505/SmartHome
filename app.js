const express = require('express');
const mongoose = require('mongoose');
const expressHandlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');
const path = require('path');
const app = express();
const router = express.Router();
const isAuthenticated = false
const User = require('./models/user');
const port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'assets')))
app.use(express.static(path.join(__dirname, 'js')))


// Настройка Handlebars
const hbs = expressHandlebars.create({
  defaultLayout: 'main',
  extname: 'hbs',
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: false }));
app.use(flash());


router.post('/', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (user) {
    req.session.user = user; 
    res.render('index',{
      isAuthenticated : true
  })
  } else {
    res.render('index',{
      isAuthenticated :false
  })
  }
});

router.get('/',(req,res) => {
    res.render('index',{
        isAuthenticated : isAuthenticated
    })
})
app.use(router)

try {
  // Устанавливаем соединение с базой данных
  mongoose.connect('mongodb+srv://bryhadir:QSWUPT3wvg4FlNS1@cluster0.y1yevzt.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // Обработчик события успешного подключения
  mongoose.connection.on('connected', () => {
    console.log('Подключено к базе данных');
  });

  // Обработчик события разрыва соединения
  mongoose.connection.on('disconnected', () => {
    console.log('Соединение с базой данных разорвано');
  });

  // Обработчик события ошибки подключения
  mongoose.connection.on('error', (err) => {
    console.error('Ошибка подключения к базе данных:', err);
  });

  // Добавьте обработчик события закрытия приложения для корректного завершения соединения
  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('Соединение с базой данных закрыто из-за завершения приложения');
      process.exit(0);
    });
  });
} catch (error) {
  console.error('Ошибка при подключении к базе данных:', error);
}



async function start() {
  try {

    app.listen(port, () => {
      console.log(`Сервер запущен на порту ${port}`);
    });

  }
  catch (e) {
    console.log(e);
  }
}

start()