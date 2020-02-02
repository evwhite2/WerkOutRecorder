
const router = require("express").Router();
const Workout = require("./../models/workout");

//add a new workout
router.post("/api/workouts", (body, res)=>{
    Workout.create(body)
    .then(dbWorkout=>{
        res.json(dbWorkout)
    }).catch(err=>{
        res.json(err);
    })
});

/* add excercises to a work out */
/* put route /api/workouts/:id */
router.put("/api/workouts/:id", (req, res)=>{
    var id = req.params.id;
    Workout.findByIdAndUpdate(id, {$push: {excercises: req.body}}, {new: true}, function(err, success){
        if(err) throw err
        return res.send(success)
    }
    )
})

  
/* get all workouts */
/* /api/workouts */
router.get("/api/workouts", (req, res)=>{
    Workout.find({})
    .then(dbWorkout=>{
        res.json(dbWorkout)
    }).catch(err=>{
        res.json(err);
    })
})


/* get last 7 workout */
/*  /api/workouts/range */
router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        var Mrecent = dbWorkout.length-8;
        var rangeFilter = dbWorkout.filter((wk, index)=>{
            if(index >Mrecent){
                return wk;
            }
        })
        res.json(rangeFilter)
    })
    .catch(err => {
      res.json(err);
    });
});

/* delete workout */
/* /api/workouts */

// router.delete("/api/workouts", (req, res) => {
//     Workout.find({})
//       .then(dbWorkout => {
//         res.json(dbWorkout);
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   });




module.exports= router;


