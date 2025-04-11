import express from 'express';
import {connectDB} from './config/dbConfig.mjs';
import superHeroRoutes from './routes/superHeroRoutes.mjs';
import path from 'path';
import { fileURLToPath } from 'url';

// Esto permite usar __dirname con ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
connectDB();

app.use(express.static('public'));
app.use('/api', superHeroRoutes);
app.use( (req, res) => {
    res.status(404).send({mensaje: 'ruta no encotrada'});
});

app.listen(PORT, () => {
    console.log(`servidor escuchando en el puerto: ${PORT}`);
})  

