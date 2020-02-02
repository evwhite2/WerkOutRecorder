
const router = require("express").Router();
var path = "C:\\Users\\evwhi\\bootcamp\\WerkOutRecorder\\public";


router.get("/", (req, res)=>{
    res.sendFile(path+"index.html", (err, success)=>{
        if(err) console.log(err);
    })
})


router.get("/exercise", (req, res)=>{
    res.sendFile(path+"/exercise.html", (err, success)=>{
        if(err) console.log(err);
    })
})

router.get("/stats", (req, res)=>{
    res.sendFile(path+"/stats.html", (err, success)=>{
        if(err) console.log(err);
    })
})


module.exports = router;