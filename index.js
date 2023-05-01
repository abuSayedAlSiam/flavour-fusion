const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;


app.use(cors());

app.get('/', (req, res)=> {
    res.send('Flavour is cooking...')
});


app.listen(port, () => {
    console.log(`Flavour is cooking on port, ${port}`)
})