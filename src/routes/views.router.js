import {Router} from 'express'

const router = Router()

router.get('/', (req,res)=>{
    res.render('register')
})
// router.get('/info', (req,res)=>{
//     res.render('info')
// })

router.get('/chat', (req,res)=>{
    
    res.render('chat')
})
router.get('/login', (req,res)=>{
    res.render('login')
})
router.get('/loginfail', (req,res)=>{
    res.render('loginfail')
})
router.get('/registerfail', (req,res)=>{
    res.render('registerfail')
})

router.get('/welcome',(req,res)=>{
    if(!req.session.user) return res.redirect('/login');
    res.render('welcome',{user:req.session.user})

})
router.get('/logout', (req,res)=>{
    if(req.session.user){
        req.session.cookie.maxAge = 0
    
        
        delete req.session.user
    }

    res.redirect('/')
      

})


export default router