import Express, { request } from 'express';

//morgan is optional. can get rid of
import morgan from 'morgan';



const app = Express()



app.use(morgan('tiny'))



app.get('/', (req, res) => {
    try {
        res.json("get request")
    }catch (error) {
        res.json(error)
    }
})

app.listen(8080, () => {
    console.log("connected to http://localhost:8080")
})