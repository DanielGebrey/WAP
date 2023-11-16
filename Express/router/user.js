const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
res.send('User List')
})

router.route('/:id').get((req,res)=>{
    console.log(req.users)
    res.send(`Get User with ID ${req.params.id}`)
}).put((req,res)=>{
    res.send(`update User with ID ${req.params.id}`)
}).delete((req,res)=>{
    res.send(`delete User with ID ${req.params.id}`)
})



// router.get('/new',(req,res)=>{
//     res.send('User Form')
//     })

// router.post('/post',(req,res)=>{
//     res.send('Create user')
// })

// router.get('/:id',(req,res)=>{
//     res.send(`Get User with ID ${req.params.id}`)
// })

// router.put('/:id',(req,res)=>{
//     res.send(`update User with ID ${req.params.id}`)
// })

// router.delete('/:id',(req,res)=>{
//     res.send(`delete User with ID ${req.params.id}`)
// })

const users = [{name:"Kyley"},{name:"jakson"}]

router.param("id",(req,res,next,id)=>{
    req.users = users[id];
    next();
})

module.exports = router