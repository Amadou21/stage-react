
const express = require('express')
const app = express()
const accountRouter = require('./accounts/account.router');
const clientRouter = require('./clients/client.router');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3001;


accountRouter.addRoutes(app);
clientRouter.addRoutes(app);


app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(port, () => {
    console.log('Server running at http://localhost:3001')
});