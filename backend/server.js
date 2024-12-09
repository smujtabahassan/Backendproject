import express from 'express'; 
const app=express();





app.get('/api/jokes',(req,res)=>{


const jokes=[
  {
    "id": 1,
    "title": "Amphary",
    "content": "this is joke 1"
  },
  {
    "id": 2,
    "title": "Nomal",
    "content": "this is joke 2"
  },
  {
    "id": 3,
    "title": "Amphary Thopchar ",
    "content": "this is joke 3"
  },
]

 

res.send(jokes);

});



const port=process.env.PORT || 3000;

app.listen(port, ()=>{
console.log(`server at http://localhost:${port}`);

});