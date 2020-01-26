
const router = require("express").Router();
const Workout = require("./../models/workout");


router.get("/", (req, res)=>{
    res.sendFile(__dirname+"index.html", (err, success)=>{
        if(err) console.log(err);
    })
})


router.get("/exercise", (req, res)=>{
    var path = "C:\\Users\\evwhi\\bootcamp\\WerkOutRecorder\\public";
    res.sendFile(path+"/exercise.html", (err, success)=>{
        if(err) console.log(err);
    })
})

router.get("/stats", (req, res)=>{
    var path = "C:\\Users\\evwhi\\bootcamp\\WerkOutRecorder\\public";
    res.sendFile(path+"/stats.html", (err, success)=>{
        if(err) console.log(err);
    })
})


module.exports = router;