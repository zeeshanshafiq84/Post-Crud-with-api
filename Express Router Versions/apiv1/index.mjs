import express from 'express';
let router = express.Router()



import postRouter from './routes/post.mjs'


// /api/v1/login
router.use(postRouter)


// router.use((req, res, next) => {a
//     if (token === "valid") {
//         next();
//     } else {
//         res.send({ message: "invalid token" })
//     }
// })


export default router