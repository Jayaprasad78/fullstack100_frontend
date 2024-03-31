const express=require('express')
const app=express()
const cors = require('cors');

app.use(cors({
  origin: 'https://fullstack100-frontend.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
  

app.get('/',(req,res)=>{
    res.send('home page')
})

app.get('/about', (req, res) => {
    // Simulate an error condition for demonstration purposes
    const errorCondition = false;
  
    if (errorCondition) {
      // Return a 500 Internal Server Error status code with an error message
      return res.status(500).send("Internal Server Error");
    } else {
      // Return a 200 OK status code with a success message
      return res.status(200).send("ok");
    }
  });
  


app.listen(3000,()=>{
    console.log('server is running')
})
