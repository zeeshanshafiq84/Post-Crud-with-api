
import  Express  from 'express';
let router = Express.Router()



router.post('/login', (req, res, next) => {
    console.log('this is login!' , new Date());
    res.send('this is login v1' + new Date());
})

router.post('/signup', (req, res, next) => {
    console.log('this is login!' , new Date());
    res.send('this is login v1' + new Date());
   
})

export default router