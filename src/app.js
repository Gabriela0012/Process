import express from 'express'
import handlebars from 'express-handlebars'
import __dirname from './utils.js'
import { Server } from 'socket.io'
import viewsRouter from './routes/views.router.js'
import visitasRouter from './routes/visitas.router.js'
import infoRouter from './routes/info.router.js'
import session from 'express-session'
import MongoStore from 'connect-mongo'
import sessionsRouter from './routes/session.router.js'
import randomsRouter from './routes/randoms.router.js'
import config from './config/config.js'
import initializePassport from './config/passport.config.js'
import passport from 'passport'
import configYargs from './config/configYargs.js'



const app = express()

const PORT = configYargs.port
console.log(PORT)

initializePassport();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
const server = app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})
console.log(config.app)

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

console.log(config.mongo)
app.use(express.static(__dirname + '/public'))
app.use(session({
  store:MongoStore.create({
    mongoUrl:config.mongo.MONGO_URL,
    ttl:3600
  }),
  secret:'desafio login por formulario',
  resave:false,
  saveUninitialized:false,
  cookie: {
    maxAge: 30000
  }
}))
app.use(passport.initialize());
app.use(passport.session());


app.use('/', viewsRouter)
app.use('/api/visitas',visitasRouter);
app.use('/info',infoRouter);
app.use('/api/sessions',sessionsRouter);
app.use('/api/randoms',randomsRouter);



const io = new Server(server)
