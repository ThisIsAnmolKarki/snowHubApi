const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes');
const app = express();
const port = process.env.PORT||8000;

JsonHotels = [
    {
        "name" : "annapurna",
        "contact" : "blablabla"
    },

    {
        "name" :"mystic",
        "contact" :"blublublu"
    }
]

app.use(cors({
    origin:"*"
}));

app.get('/',function(req,res,next){
    res.status(200).json({
        message:"hotels all present",
        hotels: JsonHotels
    })
    next();x
});

app.listen(port, ()=> console.log(`Snow hub server Started -- on port ${port}!`));