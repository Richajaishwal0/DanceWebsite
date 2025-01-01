const express=require('express');
const path =require('path')
// const fs=require('fs')
const app=express();
const port=80;

app.use('/static', express.static("static"));
app.use(express.urlencoded());

app.set("pug engine",'pug')
app.set('views',path.join(__dirname,'views'))

//endpoints
app.get('/',(req,res)=>{
const params ={};
res.status(200).render('index.pug',params);
})
app.get('/about',(req,res)=>{
    const params ={};
    res.status(200).render('about.pug',params);
})

app.get('/class',(req,res)=>{
    const params ={};
    res.status(200).render('class.pug',params);
})
app.get('/services',(req,res)=>{
   const params ={};
   res.status(200).render('services.pug',params);
})
app.get('/contact',(req,res)=>{
    const params ={};
    res.status(200).render('contact.pug',params);
    })
                           
app.listen(port,()=>{
    console.log(`Listening in port ${port}`);
})