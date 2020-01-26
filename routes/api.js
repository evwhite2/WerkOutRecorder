
const router = require("express").Router();
const Workout = require("./../models/workout");

//add a new workout
router.post("/api/workouts", (body, res)=>{
    Workout.create({body})
    .then(dbWorkout=>{
        res.json(dbWorkout)
    }).catch(err=>{
        res.json(err);
        res.end();
    })
});

/* add excercises to a work out */
/* put route /api/workouts/:id */
router.put("/api/routes/:id", ({body}, res)=>{
    console.log("test", {body});
})

  
/* get all workouts */
/* /api/workouts */

router.get("/api/workouts", (req, res)=>{
    // console.log("test", req.body);
    Workout.find({})
    .then(dbWorkout=>{
        console.log(dbWorkout)
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
//     db.Workout.find({})
//       .then(dbWorkout => {
//         res.json(dbWorkout);
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   });




module.exports= router;


