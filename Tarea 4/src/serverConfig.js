//Importaciones
import express from 'express'; //Express framework
import path from 'path'; //Para usar las rutas de archivos
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url); //Para obtener el nombre del archivo
const __dirname = path.dirname(__filename); //Para obtener el directorio del archivo
import exphbs from 'express-handlebars';
import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

dotenv.config();
import router from './routes/news.router.js';

//Instancia del servidor
const app = express(); //Esto inicia el servidor y lo iguala a la variable app

//Configuraciones
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts'),
  partialsDir: path.join(__dirname, 'views/partials'),
});
app.engine('hbs', hbs.engine);
app.set('port', process.env.PORT || 4000); //Puerto, si existe uno en el entorno de desarrollo, si no, 3000
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router); //Para que se puedan usar las rutas

export default app; //Exportamos la variable app para usarla en nuestro server.js
