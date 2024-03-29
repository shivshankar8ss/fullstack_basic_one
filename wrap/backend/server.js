import express from 'express';
const app = express();

// app.get('/',(req,res)=>{
//     res.send('Server is ready');
// });

app.get('/api/friends',(req,res)=>{

    const friends = [
        {
            id: 1,
            title:'shivshankar',
            content:'discplined and goal oriented'
        },
        {
            id: 2,
            title:'saurabh',
            content:'funny and hardworking'
        },
        {
            id: 3,
            title:'sunny',
            content:'totally bad boy'
        },
        {
            id: 4,
            title:'gaurav',
            content:'naughty and selfless'
        },
        {
            id: 5,
            title:'abhay',
            content:'innocent and selfish'
        },
    ];
    res.send(friends);
});

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Serve at http://localhost:${port}`);
});