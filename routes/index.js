var express=require("express");
var router=express.Router()


router.get('/',(req,res)=>{
    res.render('pages/index');
})
router.get('pages/about',(req,res)=>{
    res.render('about')
})

module.exports = router;
