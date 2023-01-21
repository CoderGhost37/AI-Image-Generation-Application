import express from 'express'
import dotenv from 'dotenv'
import cores from 'cors'

dotenv.config();

const app = express();
app.use(cores());
app.use(express.json({ limit: '50mb' }));

app.get('/', async(req, res) => {
    res.send("Hello World")
})

const startServer = async() => {
    app.listen(8080, () => console.log("Server is running on port 8080"))
}

startServer();