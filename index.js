const express = require('express');
const app = express();
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Express App Running');
    });
   
/* app.get('/time', (req, res) => {
        const time = new Date();
        res.send(time);
        });

app.post('/testPostRequest', (req, res) => {
        res.send("Post Request");
        }); */


app.post('/recordTemp',(req,res)=>{
    const sensorReading = req.query.temp || 0;
    if (sensorReading >100){
        res.send("Sensor reading is high = " + sensorReading);
    }
    else{

        res.send("Sensor reading is low  = " + sensorReading);
    }
})

app.post('/handleJSON', function (req, res) {
    console.log(req.body);
    const sensorReading = req.body.temp;
    if (sensorReading) {
    res.send("Sensor 1 reading = " + sensorReading );
    }
    else {
    res.send("Temp JSON parameter is not set in request");
    }
    });

    const port = 8080;
    app.listen(port, () => console.log(`Express server listening on port
    ${port}`
    ));
    