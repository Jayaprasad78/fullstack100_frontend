const express=require('express')
const app=express()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200'); // Allow requests from this origin
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Allow specific HTTP methods
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); // Allow specific headers
    next();
  });
  

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